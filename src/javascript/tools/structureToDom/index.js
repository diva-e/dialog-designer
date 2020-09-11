import constants from '../../app/data/coral-components/constants';
import coralComponents from '../../app/data/coral-components';
import stringFormat from '../stringFormat';
import conditionalRenderCheck from '../conditionalRender';

const structureToDom = (structureNode, path = '') => {
  const nodeData = coralComponents.find((coralComponent) => coralComponent.id === structureNode.type);
  if (!nodeData) {
    return null;
  }

  // Fill any text-content placeholder {}
  const textReplace = {};

  if (structureNode.properties && structureNode.properties.forEach) {
    structureNode.properties.forEach((field) => {
      if (field.type === constants.fieldValueTypes.KEY_VALUE) {
        const fieldDefinition = nodeData.fields.find(({ id }) => id === field.id);
        if (typeof fieldDefinition.renderItem === 'function') {
          textReplace[field.id] = fieldDefinition.renderItem(field.value, 'preview-output');
          return;
        }

        if (typeof fieldDefinition.renderItemString === 'function') {
          textReplace[field.id] = field.value.map((value) => (
            fieldDefinition.renderItemString(value)
          ))
            .join('');
          return;
        }
      }

      textReplace[field.id] = field.value;
    });
  }

  const htmlSource = nodeData.previewOutput.trim();

  // Fill any placeholders
  const nodeDomString = stringFormat(htmlSource, textReplace);

  const parser = new DOMParser();
  const doc = parser.parseFromString(nodeDomString, 'text/html');

  // parse error reporting
  if (doc.querySelector('parsererror')) {
    console.error(`parse-error structureToDom [${structureNode.type}]`);
    [...doc.querySelectorAll('parsererror')].forEach((parseError) => {
      const actualParseError = parseError.querySelector('div');
      if (actualParseError) {
        throw new Error(`in component ${nodeData.name}: ${actualParseError.innerText}`);
      }
    });
  }

  // adapt substitution
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
        adapt.parentNode.insertBefore(nextChild, adapt);
      });
    }
  });

  conditionalRenderCheck(doc);

  // drop-target substitution
  [...doc.querySelectorAll('drop-target')].forEach((droptarget) => {
    const childContainerName = droptarget.dataset.name;
    const childPath = `${path}children.${childContainerName}`;

    // checking if a path is already set so that the droptargets inside the
    // previously created <adapt> block does not get re-written
    // Todo: This needs to be changed and cleaned!
    if (droptarget.dataset.path) {
      return;
    }

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
        droptarget.parentNode.insertBefore(nextChild, droptarget);
      });
    }
  });

  return doc.body.firstElementChild;
};

export default structureToDom;
