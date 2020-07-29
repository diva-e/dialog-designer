import coralComponents from '../../app/data/coral-components';
import stringFormat from '../stringFormat';

const compAll = coralComponents.map(({ id }) => (id)).join(',');

const structureToDom = (structureNode, path = '') => {

  const nodeData = coralComponents.find((coralComponent) => coralComponent.id === structureNode.type);

  if (!nodeData) {
    return null;
  }

  // Fill any textcontent placeholders
  const textReplace = {};
  Object.keys(structureNode.properties).forEach((fieldName) => {
    textReplace[fieldName] = structureNode.properties[fieldName].value;
    console.log(structureNode.properties[fieldName]);
  });

  const nodeDomString = stringFormat(nodeData.src, textReplace)
    // replace * with a list of all components
    // ToDo: add sope sort of "contentgroups"
    .replace(/data-accept="\*"/gi, `data-accept="${compAll}"`);

  const parser = new DOMParser();
  const doc = parser.parseFromString(nodeDomString, 'text/html');

  // Add childnodes for all contents defined by the names of droptargets
  [...doc.querySelectorAll('droptarget')].forEach((droptarget) => {

    const childContainerName = droptarget.dataset.name;
    const childPath = `${path}children.${childContainerName}`;
    // eslint-disable-next-line no-param-reassign
    droptarget.dataset.path = childPath;

    if (structureNode.children && structureNode.children[childContainerName]) {
      structureNode.children[childContainerName].forEach((childNode, index) => {
        droptarget.parentNode.insertBefore(structureToDom(childNode, `${childPath}.${index}.`), droptarget);
      });
    }
  });

  return doc.body.firstElementChild;
};

export default structureToDom;
