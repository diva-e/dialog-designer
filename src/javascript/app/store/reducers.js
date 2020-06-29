import { combineReducers } from 'redux';
import editComponent from './reducers/editComponentReducer';
import structure from './reducers/structureReducer';

export default combineReducers({
  editComponent,
  structure,
});
