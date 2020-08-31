import saveAs from 'file-saver';
import XMLFormat from '../XMLFormat';
import structureToXML from '../structureToXML';
import ACGProcessor from '../ACG/ACGProcessor';

const saveStructure = (structure, type) => {
  let output = '';
  let filename = null;

  switch (type) {
    case 'xml':
      output = XMLFormat(structureToXML(structure).documentElement);
      filename = '_cq_dialog.xml';
      break;
    case 'json':
      output = JSON.stringify(structure, null, 2);
      filename = 'dialog.json';
      break;
    case 'acgjson':
      output = new ACGProcessor().getACGOutput(structure);
      filename = 'acg.json';
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
