import 'babel-polyfill/dist/polyfill';
import '../scss/index.scss';
import initApp from './app/initApp';
import initTestStructure from './initTestStructure';

document.addEventListener('DOMContentLoaded', () => {
  initTestStructure();
  initApp();

  // console.log(Coral);
});
