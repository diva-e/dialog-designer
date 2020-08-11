import 'babel-polyfill/dist/polyfill';
import * as Coral from '@adobe/coral-spectrum/dist/js/coral';
import '../scss/index.scss';
import initApp from './app/initApp';

window.Coral = Coral;

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});
