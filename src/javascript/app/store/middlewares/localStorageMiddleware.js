/* eslint-disable no-undef */
import actionNames from '../actionNames';

const localStorageMiddleware = (store) => (next) => (action) => {
  if (action.type === actionNames.STRUCTURE.SET) {
    window.localStorage.setItem(STORAGE.STRUCTURE, JSON.stringify(store.getState().structure));
  }

  if (action.type === actionNames.SETTINGS.SET) {
    window.localStorage.setItem(STORAGE.SETTINGS, JSON.stringify(store.getState().settings));
  }

  next(action);
};

export default localStorageMiddleware;
