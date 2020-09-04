import actionNames from '../actionNames';

const localStorageMiddleware = (store) => (next) => (action) => {
  if (action.type === actionNames.STRUCTURE.SET) {
    // todo: outsource and rename storage name
    window.localStorage.setItem('dndd-test-structure', JSON.stringify(store.getState().structure));
  }

  if (action.type === actionNames.SETTINGS.SET) {
    // todo: outsource and rename storage name
    window.localStorage.setItem('adc-settings', JSON.stringify(store.getState().settings));
  }

  next(action);
};

export default localStorageMiddleware;
