import 'babel-polyfill/dist/polyfill';
import './tools/initCoral';
import '../scss/index.scss';
import initApp from './app/initApp';
import tabFocusHelper from './tools/tabFocusHelper';

document.addEventListener('DOMContentLoaded', () => {
  initApp();
  tabFocusHelper.init();
});
