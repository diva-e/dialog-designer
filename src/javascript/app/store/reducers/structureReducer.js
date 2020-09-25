/* eslint-disable no-undef */
import actionNames from '../actionNames';

const defaultStructure = {
  type: 'root',
  properties: {},
  children: {},
};

const structureReducer = (value = defaultStructure, action) => {
  switch (action.type) {
    case actionNames.STRUCTURE.SET:
      window.localStorage.setItem(STORAGE.STRUCTURE, JSON.stringify(action.payload));
      return action.payload;
    default:
      return value;
  }
};

export default structureReducer;
