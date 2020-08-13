import coralComponents from '../../app/data/coral-components';
import stringFormat from '../stringFormat';

const compAll = coralComponents.map(({ id }) => (id)).join(',');

const structureToDom = (structureNode, path = '') => {
  const nodeData = coralComponents.find((coralComponent) => coralComponent.id === structureNode.type);
  if (!nodeData) {
    return null;
  }

  // Fill any text-content placeholder {}
  const textReplace = {};

  if (structureNode.properties && structureNode.properties.forEach) {
    structureNode.properties.forEach((field) => {
      textReplace[field.id] = field.value;
    });
  }

  const htmlSource = nodeData.src.trim();

  const nodeDomString = stringFormat(htmlSource, textReplace)
    // replace * with a list of all components
    // ToDo: add scope sort of "component-categories" ???
    .replace(/data-accept="\*"/gi, `data-accept="${compAll}"`);

  const parser = new DOMParser();
  const doc = parser.parseFromString(nodeDomString, 'text/html');

  // error reporting
  if (doc.querySelector('parsererror')) {
    console.error(`parse-error structureToDom [${structureNode.type}]`);
    [...doc.querySelectorAll('parsererror')].forEach((parseError) => {
      const actualParseError = parseError.querySelector('div');
      if (actualParseError) {
        throw new Error(`in component ${nodeData.name}: ${actualParseError.innerText}`);
      }
    });
  }

  [...doc.querySelectorAll('adapt')].forEach((adapt) => {
    const to = adapt.dataset.to;
    const from = adapt.dataset.from;
    const childPath = `${path}children.${from}`;
    const childContainerName = adapt.dataset.from;

    if (structureNode.children && structureNode.children[childContainerName]) {
      structureNode.children[childContainerName].forEach((childNode, index) => {
        const instancePath = `${childPath}.${index}`;
        const nextChild = structureToDom({
          ...childNode,
          type: to,
        }, `${instancePath}.`);

        console.log(nextChild.outerHTML);

        adapt.parentNode.insertBefore(nextChild, adapt);
      });
    }
  });

  // Add childnodes for all contents defined by the names of droptargets
  [...doc.querySelectorAll('drop-target')].forEach((droptarget) => {
    const childContainerName = droptarget.dataset.name;
    const childPath = `${path}children.${childContainerName}`;

    // checking if a path is already set so that the droptargets inside the
    // previously created <adapt> block does not get re-writtem
    // This needs to be changed and cleaned! ToDo!
    if (droptarget.dataset.path) {
      return;
    }

    // eslint-disable-next-line no-param-reassign
    droptarget.dataset.path = childPath;

    console.log({
      childContainerName,
      childPath,
    });

    if (structureNode.children && structureNode.children[childContainerName]) {
      structureNode.children[childContainerName].forEach((childNode, index) => {
        const fieldData = coralComponents.find((coralComponent) => coralComponent.id === childNode.type);
        const instancePath = `${childPath}.${index}`;
        const nextChild = structureToDom(childNode, `${instancePath}.`);
        nextChild.setAttribute('title', fieldData.name);
        nextChild.dataset.path = instancePath;
        nextChild.classList.add('has-contextmenu');

        droptarget.parentNode.insertBefore(nextChild, droptarget);
      });
    }
  });

  return doc.body.firstElementChild;
};

export default structureToDom;
