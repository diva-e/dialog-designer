import { applyMiddleware } from 'redux';

import settingsMiddleware from './middlewares/settingsMiddleware';
import dropMiddleware from './middlewares/dropMiddleware';
import footerMiddleware from './middlewares/footerMiddleware';
import startCreateComponentMiddleware from './middlewares/startCreateComponentMiddleware';
import startUpdateComponentMiddleware from './middlewares/startUpdateComponentMiddleware';
import startDeleteComponentMiddleware from './middlewares/startDeleteComponentMiddleware';
import updateDialogPreviewMiddleware from './middlewares/updateDialogPreviewMiddleware';
import contextmenuMiddleware from './middlewares/contextmenuMiddleware';
import localStorageMiddleware from './middlewares/localStorageMiddleware';
import moveComponentMiddleware from './middlewares/moveComponentMiddleware';

export default applyMiddleware(
  settingsMiddleware,
  dropMiddleware,
  footerMiddleware,
  startCreateComponentMiddleware,
  startUpdateComponentMiddleware,
  startDeleteComponentMiddleware,
  updateDialogPreviewMiddleware,
  contextmenuMiddleware,
  localStorageMiddleware,
  moveComponentMiddleware,
);
