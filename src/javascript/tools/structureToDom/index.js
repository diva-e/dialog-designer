import coralComponents from '../../app/data/coral-components';
import stringFormat from '../stringFormat';

const structureToDom = (structureNode) => {

  const nodeData = coralComponents.find((coralComponent) => coralComponent.nodeName === structureNode.type);

  if (!nodeData) {
    return null;
  }

  // Fill any textcontent placeholders
  const nodeDomString = stringFormat(nodeData.src, structureNode.properties);

  const parser = new DOMParser();
  const doc = parser.parseFromString(nodeDomString, 'text/html');

  // Add childnodes for all contend defined by the names of droptargets
  [...doc.querySelectorAll('droptarget')].forEach((droptarget) => {
    const childContainerName = droptarget.dataset.name;
    if (structureNode.children && structureNode.children[childContainerName]) {
      structureNode.children[childContainerName].forEach((childNode) => {

        droptarget.parentNode.insertBefore(structureToDom(childNode), droptarget);
      });
    }
  });

  return doc.querySelector(nodeData.nodeName.toLowerCase());
};

export default structureToDom;
