import { applyMiddleware } from 'redux';

import settingsMiddleware from './middlewares/settingsMiddleware';
import dropMiddleware from './middlewares/dropMiddleware';
import footerMiddleware from './middlewares/footerMiddleware';
import startCreateComponentMiddleware from './middlewares/startCreateComponentMiddleware';
import startUpdateComponentMiddleware from './middlewares/startUpdateComponentMiddleware';
import deleteComponentMiddleware from './middlewares/deleteComponentMiddleware';
import updateDialogPreviewMiddleware from './middlewares/updateDialogPreviewMiddleware';
import contextmenuMiddleware from './middlewares/contextmenuMiddleware';
import localStorageMiddleware from './middlewares/localStorageMiddleware';
import moveComponentMiddleware from './middlewares/moveComponentMiddleware';
import pasteComponentMiddleware from './middlewares/pasteComponentMiddleware';
import cutComponentMiddleware from './middlewares/cutComponentMiddleware';
import copyComponentMiddleware from './middlewares/copyComponentMiddleware';
import setStructureClipboardMiddleware from './middlewares/setStructureClipboardMiddleware';

export default applyMiddleware(
  settingsMiddleware,
  dropMiddleware,
  footerMiddleware,
  setStructureClipboardMiddleware,
  startCreateComponentMiddleware,
  startUpdateComponentMiddleware,
  deleteComponentMiddleware,
  updateDialogPreviewMiddleware,
  contextmenuMiddleware,
  localStorageMiddleware,
  moveComponentMiddleware,
  pasteComponentMiddleware,
  cutComponentMiddleware,
  copyComponentMiddleware,
);
