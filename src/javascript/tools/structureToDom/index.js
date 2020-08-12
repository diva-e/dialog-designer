import coralComponents from '../../app/data/coral-components';
import stringFormat from '../stringFormat';
import changeNodeName from '../changeNodeName';

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
    // ToDo: add scope sort of "contentgroups" ???
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
    const adaptFrom = adapt.dataset.from;
    // eslint-disable-next-line no-param-reassign
    // adapt.dataset.path = `${path}children.${adaptFrom}`;

    console.log(adapt);


  });

  // Add childnodes for all contents defined by the names of droptargets
  [...doc.querySelectorAll('drop-target')].forEach((droptarget) => {
    const childContainerName = droptarget.dataset.name;
    const childPath = `${path}children.${childContainerName}`;
    // eslint-disable-next-line no-param-reassign
    droptarget.dataset.path = childPath;

    if (structureNode.children && structureNode.children[childContainerName]) {
      structureNode.children[childContainerName].forEach((childNode, index) => {
        const fieldData = coralComponents.find((coralComponent) => coralComponent.id === childNode.type);
        const instancePath = `${childPath}.${index}`;
        const nextChild = structureToDom(childNode, `${instancePath}.`);
        nextChild.setAttribute('title', fieldData.name);
        nextChild.dataset.path = instancePath;
        nextChild.classList.add('has-contextmenu');

        // if (fieldData.fieldWrapperNeeded) {
        //   if (nextChild.nodeName.toLowerCase().startsWith('coral-')) {
        //     nextChild = changeNodeName(nextChild, `wrapped-${nextChild.nodeName.toLowerCase()}`);
        //   } else if (nextChild.hasAttribute('is')) {
        //     nextChild.setAttribute('is', `coral-${nextChild.getAttribute('is')}`);
        //   } else {
        //     nextChild.setAttribute('is', 'wrapped-component');
        //   }
        // }

        droptarget.parentNode.insertBefore(nextChild, droptarget);
      });
    }
  });

  return doc.body.firstElementChild;
};

export default structureToDom;
