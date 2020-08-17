
const editComponentMultifieldMiddleware = () => (next) => (action) => {
  switch (action.type) {
    case 'ADD_MULTIFIELD_ITEM':
      // todo:
      console.log('ADD_MULTIFIELD_ITEM');
      break;
    case 'DELETE_MULTIFIELD_ITEM':
      // todo:
      console.log('DELETE_MULTIFIELD_ITEM');
      break;
    default:
      break;
  }

  next(action);
};

export default editComponentMultifieldMiddleware;
