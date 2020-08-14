const localStorageMiddleware = (store) => (next) => (action) => {

  if (action.type === 'SET_STRUCTURE') {
    window.localStorage.setItem('dndd-test-structure', JSON.stringify(store.getState().structure));
  }

  next(action);
};

export default localStorageMiddleware;
