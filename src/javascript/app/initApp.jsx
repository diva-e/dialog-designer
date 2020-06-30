import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import App from './components/App';
import getStore from './store';
import appRootProxy from '../tools/appRootProxy';

const initApp = () => {
  const appRoot = document.getElementById('app');
  if (!appRoot) {
    return;
  }

  const initialState = {};

  const loadedStructure = JSON.parse(window.localStorage.getItem('dndd-test-structure'));

  if (loadedStructure) {
    initialState.structure = loadedStructure;
  }

  render(<Provider store={getStore(initialState)}><App /></Provider>, appRootProxy(appRoot));
};

export default initApp;
