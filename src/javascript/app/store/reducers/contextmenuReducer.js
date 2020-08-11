const contextmenuReducer = (value = {}, action) => {
  switch (action.type) {
    case 'OPEN_CONTEXTMENU':
      return {
        y: action.y,
        x: action.x,
        path: action.path,
      };
    case 'START_UPDATE_COMPONENT':
    case 'CLOSE_CONTEXTMENU':
    case 'SET_STRUCTURE':
      return {};
    default:
      return value;
  }
};

export default contextmenuReducer;
