import actionNames from '../actionNames';

const defaultStructure = {
  type: 'root',
  properties: {},
  children: {},
};

const structureReducer = (value = defaultStructure, action) => {
  switch (action.type) {
    case actionNames.STRUCTURE.SET:
      // todo:rename and outsource storage name
      window.localStorage.setItem('dndd-test-structure', JSON.stringify(action.payload));
      return action.payload;
    default:
      return value;
  }
};

export default structureReducer;
