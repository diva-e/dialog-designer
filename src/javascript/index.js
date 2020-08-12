import 'babel-polyfill/dist/polyfill';
import './tools/initCoral';
import '../scss/index.scss';
import initApp from './app/initApp';

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});
