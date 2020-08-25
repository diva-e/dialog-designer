import { combineReducers } from 'redux';
import settings from './reducers/settingsReducer';
import editComponent from './reducers/editComponentReducer';
import structure from './reducers/structureReducer';
import contextmenu from './reducers/contextmenuReducer';


export default combineReducers({
  settings,
  editComponent,
  structure,
  contextmenu,
});
