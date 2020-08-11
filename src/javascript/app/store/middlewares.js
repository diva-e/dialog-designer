import { applyMiddleware } from 'redux';
import dropMiddleware from './middlewares/dropMiddleware';
import downloadsMiddleware from './middlewares/downloadsMiddleware';
import startCreateComponentMiddleware from './middlewares/startCreateComponentMiddleware';
import startUpdateComponentMiddleware from './middlewares/startUpdateComponentMiddleware';
import startDeleteComponentMiddleware from './middlewares/startDeleteComponentMiddleware';

export default applyMiddleware(
  dropMiddleware,
  downloadsMiddleware,
  startCreateComponentMiddleware,
  startUpdateComponentMiddleware,
  startDeleteComponentMiddleware,
);
