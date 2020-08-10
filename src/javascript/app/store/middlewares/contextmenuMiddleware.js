const contextmenuMiddleware = () => (next) => (action) => {
  switch (action.type) {
    case 'OPEN_CONTEXTMENU':
      console.log(action.x, action.y);
      break;
    case 'EDIT_COMPONENT':
      console.log(action.path);
      break;
    case 'DELETE_COMPONENT':
      console.log(action.path);
      break;
    default:
      break;
  }

  next(action);
};

export default contextmenuMiddleware;
