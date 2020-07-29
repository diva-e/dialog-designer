import { applyMiddleware } from 'redux';
import dropMiddleware from './middlewares/dropMiddleware';
import downloadsMiddleware from './middlewares/downloadsMiddleware';

export default applyMiddleware(
  dropMiddleware,
  downloadsMiddleware,
);
