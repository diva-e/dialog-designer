const contextmenuReducer = (value = {}, action) => {
  switch (action.type) {
    case 'OPEN_CONTEXTMENU':
      return {
        y: action.y,
        x: action.x,
        path: action.path,
      };
    case 'CLOSE_CONTEXTMENU':
      return {};
    default:
      return value;
  }
};

export default contextmenuReducer;
