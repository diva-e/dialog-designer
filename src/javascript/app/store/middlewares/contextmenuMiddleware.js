const contextmenuMiddleware = () => (next) => (action) => {
  if (action.type === 'OPEN_CONTEXTMENU') {
    // open contextmenu
    alert('open contextmenu');
    console.log(action.x, action.y, action.path);
  }

  next(action);
};

export default contextmenuMiddleware;
