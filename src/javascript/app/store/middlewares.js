import { applyMiddleware } from 'redux';
import dropMiddleware from './middlewares/dropMiddleware';
import downloadsMiddleware from './middlewares/downloadsMiddleware';
import startCreateComponentMiddleware from './middlewares/startCreateComponentMiddleware';
import startUpdateComponentMiddleware from './middlewares/startUpdateComponentMiddleware';
import startDeleteComponentMiddleware from './middlewares/startDeleteComponentMiddleware';
import updateDialogPreviewMiddleware from './middlewares/updateDialogPreviewMiddleware';
import contextMenuMiddleware from './middlewares/contextMenuMiddleware';
import localStorageMiddleware from './middlewares/localStorageMiddleware';

export default applyMiddleware(
  dropMiddleware,
  downloadsMiddleware,
  startCreateComponentMiddleware,
  startUpdateComponentMiddleware,
  startDeleteComponentMiddleware,
  updateDialogPreviewMiddleware,
  contextMenuMiddleware,
  localStorageMiddleware,
);
