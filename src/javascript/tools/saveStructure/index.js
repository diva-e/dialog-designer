import saveAs from 'file-saver';
import XMLFormat from '../XMLFormat';
import structureToXML from '../structureToXML';

const saveStructure = (structure, type) => {
  let output = '';
  let filename = null;

  switch (type) {
    case 'json':
      output = JSON.stringify(structure, null, 2);
      filename = 'structure.json';
      break;
    case 'xml':
      output = XMLFormat(structureToXML(structure).documentElement);
      filename = 'structure.xml';
      break;
    default:
      break;
  }

  if (!type || !filename) {
    throw new Error(`unknown type ${type}`);
  }

  saveAs(new Blob([output], { type: 'text/plain;charset=utf-8' }), filename);
};

export default saveStructure;
