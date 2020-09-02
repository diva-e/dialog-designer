const contextmenuReducer = (value = {}, action) => {
  switch (action.type) {
    case 'OPEN_CONTEXTMENU':
      return {
        y: action.y,
        x: action.x,
        path: action.path,
      };
    case 'START_UPDATE_COMPONENT':
    case 'SET_STRUCTURE':
      return {};
    default:
      return value;
  }
};

export default contextmenuReducer;

// case 'START_DELETE_COMPONENT':
// case 'MOVE_COMPONENT_UP':
// case 'MOVE_COMPONENT_DOWN':
// case 'CUT_COMPONENT':
// case 'PASTE_COMPONENT':
