import 'babel-polyfill/dist/polyfill';
import '../scss/index.scss';
import initApp from './app/initApp';

document.addEventListener('DOMContentLoaded', () => {
  initApp();
  const message = 'oqnidbsjhbjhmhsh`khydc';

  // eslint-disable-next-line no-console
  console.log(message
    .split('')
    .map((char) => char.charCodeAt(0) + 1)
    .map((charCode) => String.fromCharCode(charCode))
    .join(''));
});
