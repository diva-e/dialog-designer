/*
// todo: discuss location / approach to close it
const toggleContextmenuVisibility = () => {
  // todo: investigate multiple execution issue
  console.log('CLOSE');
  const contextmenu = document.getElementsByClassName('contextmenu');
  if (contextmenu.length) {
    contextmenu[0].classList.toggle('contextmenu--open');
  }
};
*/

const contextmenuMiddleware = () => (next) => (action) => {
  switch (action.type) {
    case 'OPEN_CONTEXTMENU':
    case 'CLOSE_CONTEXTMENU':
      // toggleContextmenuVisibility();
      break;
    /*
    case 'EDIT_COMPONENT':

      console.log(action.path);
      break;
      */
    case 'DELETE_COMPONENT':
      console.log(action.path);
      break;
    default:
      break;
  }

  next(action);
};

export default contextmenuMiddleware;
