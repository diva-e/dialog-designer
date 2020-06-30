const defaultStructure = {
  type: 'coral-panel',
  properties: {
    heading: 'Content',
  },
  children: {},
};

const structureReducer = (value = defaultStructure, action) => {
  switch (action.type) {
    case 'SET_STRUCTURE':
      window.localStorage.setItem('dndd-test-structure', JSON.stringify(action.payload));
      return action.payload;
    default:
      return value;
  }
};

export default structureReducer;
