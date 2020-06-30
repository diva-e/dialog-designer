import coralComponents from '../../app/data/coral-components';
import stringFormat from '../stringFormat';

const wrapNS = (xml) => {
  if (xml.indexOf('<?xml') === 0) {
    return xml;
  }

  return (
    `<wrapns
      xmlns:sling="http://sling.apache.org/jcr/sling/1.0"
      xmlns:granite="http://www.adobe.com/jcr/granite/1.0"
      xmlns:cq="http://www.day.com/jcr/cq/1.0"
      xmlns:jcr="http://www.jcp.org/jcr/1.0"
      >${xml}</wrapns>`
  );
};

const structureToXML = (structureNode) => {

  const nodeData = coralComponents.find((coralComponent) => coralComponent.id === structureNode.type);

  if (!nodeData) {
    return null;
  }

  // Fill any textcontent placeholders
  const nodeDomString = stringFormat(nodeData.xml, structureNode.properties);

  const parser = new DOMParser();
  const doc = parser.parseFromString(wrapNS(nodeDomString), 'text/xml');

  if (doc.querySelector('parsererror')) {
    console.log('aayyyy');
  }

  // Add childnodes for all contend defined by the names of droptargets
  [...doc.querySelectorAll('droptarget')].forEach((droptarget) => {

    const childContainerName = droptarget.getAttribute('data-name');

    if (structureNode.children && structureNode.children[childContainerName]) {
      structureNode.children[childContainerName].forEach((childNode) => {

        const XMLchildNode = structureToXML(childNode).firstElementChild;

        const XMLappendNode = XMLchildNode.nodeName.toLowerCase() === 'wrapns' ? XMLchildNode.firstElementChild : XMLchildNode;

        droptarget.parentNode.insertBefore(XMLappendNode, droptarget);
      });
    }

    droptarget.parentNode.removeChild(droptarget);
  });

  return doc;
};

export default structureToXML;
