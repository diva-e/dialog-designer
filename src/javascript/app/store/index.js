import { createStore, compose } from 'redux';
import reducers from './reducers';
import middlewares from './middlewares';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = [
  middlewares,
];

const getStore = (config) => (
  createStore(reducers, config, composeEnhancers(...enhancers))
);

export default getStore;
