import { applyMiddleware } from 'redux';
import dropMiddleware from './middlewares/dropMiddleware';
import downloadsMiddleware from './middlewares/downloadsMiddleware';
import startEditComponentMiddleware from './middlewares/startEditComponentMiddleware';
import contextmenuMiddleware from './middlewares/contextmenuMiddleware';


export default applyMiddleware(
  dropMiddleware,
  downloadsMiddleware,
  startEditComponentMiddleware,
  contextmenuMiddleware,
);
