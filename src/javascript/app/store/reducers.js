import { combineReducers } from 'redux';
import editComponent from './reducers/editComponentReducer';
import structure from './reducers/structureReducer';
import footer from './reducers/footerReducer';

export default combineReducers({
  editComponent,
  structure,
  footer,
});
