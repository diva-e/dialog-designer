import constants from '../../data/coral-components/constants';
import saveStructure from '../../../tools/saveStructure';
import actionNames from '../actionNames';

const footerMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case actionNames.STRUCTURE.DOWNLOAD.XML:
      saveStructure(store.getState().structure, 'xml');
      break;
    case actionNames.STRUCTURE.DOWNLOAD.JSON:
      saveStructure(store.getState().structure, 'json');
      break;
    case actionNames.STRUCTURE.DOWNLOAD.ACG_JSON:
      saveStructure(store.getState().structure, 'acgjson');
      break;
    case actionNames.STRUCTURE.RESET:
      // eslint-disable-next-line no-alert
      if (window.confirm(constants.messages.DELETE_CONFIRM)) {
        window.localStorage.removeItem('dndd-test-structure');
        window.location.reload();
      }

      break;
    default:
      break;
  }

  next(action);
};

export default footerMiddleware;
