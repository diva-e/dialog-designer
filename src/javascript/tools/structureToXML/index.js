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

const structureToXML = (structureNode, path = '') => {
  const nodeData = coralComponents.find((coralComponent) => coralComponent.id === structureNode.type);
  if (!nodeData) {
    return null;
  }

  // Fill any textcontent placeholders
  const textReplace = {};
  if (structureNode.properties && structureNode.properties.forEach) {
    structureNode.properties.forEach((field) => {
      switch (field.type) {
        case 'Boolean':
          textReplace[field.id] = `{Boolean}${field.value ? 'true' : 'false'}`;
          break;
        case 'Long':
          textReplace[field.id] = `{Long}${parseInt(field.value, 10)}`;
          break;
        case 'String':
        default:
          textReplace[field.id] = field.value;
          break;
      }
    });
  }

  // Fill any textcontent placeholders
  const nodeDomString = stringFormat(nodeData.xmlOutput, textReplace);

  const parser = new DOMParser();
  const doc = parser.parseFromString(wrapNS(nodeDomString), 'text/xml');

  if (doc.querySelector('parsererror')) {
    console.error(`parse-error structureToXML [${structureNode.type}]`);
    [...doc.querySelectorAll('parsererror')].forEach((parseError) => {
      const actualParseError = parseError.querySelector('div');
      if (actualParseError) {
        throw new Error(`In component ${nodeData.name}: ${actualParseError.innerText}`);
      }
    });
  }

  [...doc.querySelectorAll('adapt')].forEach((adapt) => {
    const adaptFrom = adapt.getAttribute('data-from');
    // eslint-disable-next-line no-param-reassign
    adapt.setAttribute('path', `${path}children.${adaptFrom}`);
  });

  // Add childnodes for all contend defined by the names of droptargets
  [...doc.querySelectorAll('drop-target')].forEach((droptarget) => {
    const childContainerName = droptarget.getAttribute('data-name');
    if (structureNode.children && structureNode.children[childContainerName]) {
      structureNode.children[childContainerName].forEach((childNode) => {
        const xmlDoc = structureToXML(childNode);
        if (!xmlDoc) {
          return;
        }

        const XMLchildNode = xmlDoc.firstElementChild;
        const XMLappendNode = XMLchildNode.nodeName.toLowerCase() === 'wrapns' ? XMLchildNode.firstElementChild : XMLchildNode;
        droptarget.parentNode.insertBefore(XMLappendNode, droptarget);
      });
    }

    droptarget.parentNode.removeChild(droptarget);
  });

  return doc;
};

export default structureToXML;
