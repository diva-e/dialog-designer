import constants from '../../app/data/coral-components/constants';
import coralComponents from '../../app/data/coral-components';
import stringFormat from '../stringFormat';
import conditionalRenderCheck from '../conditionalRender';

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

  // Fill any placeholders
  const textReplace = {};
  if (structureNode.properties && structureNode.properties.forEach) {
    structureNode.properties.forEach((field) => {
      let fieldDefinition;
      switch (field.type) {
        case constants.fieldValueTypes.BOOLEAN:
          textReplace[field.id] = `{Boolean}${field.value ? 'true' : 'false'}`;
          break;
        case constants.fieldValueTypes.LONG:
          textReplace[field.id] = `{Long}${parseInt(field.value, 10)}`;
          break;
        case constants.fieldValueTypes.KEY_VALUE:
          fieldDefinition = nodeData.fields.find(({ id }) => id === field.id);
          if (typeof fieldDefinition.renderItem === 'function') {
            textReplace[field.id] = fieldDefinition.renderItem(field.value, 'xml-output');
          }

          if (typeof fieldDefinition.renderItemString === 'function') {
            textReplace[field.id] = field.value.map((value) => (
              fieldDefinition.renderItemString(value)
            )).join('');
          }

          break;
        case constants.fieldValueTypes.STRING:
        default:
          textReplace[field.id] = field.value;
          break;
      }
    });
  }

  // Fill any placeholders
  const nodeDomString = stringFormat(nodeData.xmlOutput, textReplace);

  const parser = new DOMParser();
  const doc = parser.parseFromString(wrapNS(nodeDomString), 'text/xml');

  // parse error reporting
  if (doc.querySelector('parsererror')) {
    console.error(`parse-error structureToXML [${structureNode.type}]`);
    [...doc.querySelectorAll('parsererror')].forEach((parseError) => {
      const actualParseError = parseError.querySelector('div');
      if (actualParseError) {
        throw new Error(`In component ${nodeData.name}: ${actualParseError.innerText}`);
      }
    });
  }

  conditionalRenderCheck(doc);

  // adapt substitution
  [...doc.querySelectorAll('adapt')].forEach((adapt) => {
    const adaptFrom = adapt.getAttribute('data-from');
    // eslint-disable-next-line no-param-reassign
    adapt.setAttribute('path', `${path}children.${adaptFrom}`);
  });

  // drop-target substitution
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
