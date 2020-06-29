import 'babel-polyfill/dist/polyfill';
import '../scss/index.scss';
import initApp from './app/initApp';
import initTestStructure from './initTestStructure';

document.addEventListener('DOMContentLoaded', () => {

  const oldStructure = JSON.parse(window.localStorage.getItem('dndd-test-structure'));
  console.log(JSON.stringify(oldStructure, null, 2));

  initTestStructure();
  initApp();

  // console.log(Coral);
});
