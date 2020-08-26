const localStorageMiddleware = (store) => (next) => (action) => {
  if (action.type === 'SET_STRUCTURE') {
    // todo: outsource and rename storage name
    window.localStorage.setItem('dndd-test-structure', JSON.stringify(store.getState().structure));
  }

  if (action.type === 'SET_SETTINGS') {
    // todo: outsource and rename storage name
    window.localStorage.setItem('adc-settings', JSON.stringify(store.getState().settings));
  }

  next(action);
};

export default localStorageMiddleware;
