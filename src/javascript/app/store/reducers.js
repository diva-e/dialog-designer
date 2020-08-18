import { combineReducers } from 'redux';
import editComponent from './reducers/editComponentReducer';
import structure from './reducers/structureReducer';
import contextmenu from './reducers/contextmenuReducer';

export default combineReducers({
  editComponent,
  structure,
  contextmenu,
});
