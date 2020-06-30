import 'babel-polyfill/dist/polyfill';
import '../scss/index.scss';
import './tools/documentCreateElement';
import initApp from './app/initApp';

document.addEventListener('DOMContentLoaded', () => {
  initApp();
  // console.log(Coral);
});
