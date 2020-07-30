import saveStructure from '../../../tools/saveStructure';

const downloadsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'DOWNLOAD_XML':
      saveStructure(store.getState().structure, 'xml');
      break;
    case 'DOWNLOAD_JSON':
      saveStructure(store.getState().structure, 'json');
      break;
    case 'EXECUTE_COMPLETE_RESET':
      // eslint-disable-next-line no-alert
      if (window.confirm('Proceeding here will completely reset the current dialog.')) {
        window.localStorage.removeItem('dndd-test-structure');
        window.location.reload();
      }

      break;
    default:
      break;
  }

  next(action);
};

export default downloadsMiddleware;
