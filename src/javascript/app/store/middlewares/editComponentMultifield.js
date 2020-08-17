import saveStructure from '../../../tools/saveStructure';

const editComponentMultifieldItem = (store) => (next) => (action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      // todo:
      break;
    case 'DELETE_ITEM':
      // todo:
      break;
    default:
      break;
  }

  next(action);
};

export default editComponentMultifieldItem;
