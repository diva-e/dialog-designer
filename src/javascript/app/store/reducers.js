import { combineReducers } from 'redux';
import editComponent from './reducers/editComponentReducer';
import editComponentMultifield from './reducers/editComponentMultifieldReducer';
import structure from './reducers/structureReducer';
import contextmenu from './reducers/contextmenuReducer';

export default combineReducers({
  editComponent,
  editComponentMultifield,
  structure,
  contextmenu,
});
