import actionNames from '../actionNames';

const contextmenuReducer = (value = {}, action) => {
  switch (action.type) {
    case actionNames.UI.CONTEXTMENU.OPEN:
      return {
        y: action.y,
        x: action.x,
        path: action.path,
      };
    case actionNames.COMPONENT.UPDATE:
    case actionNames.STRUCTURE.SET:
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
