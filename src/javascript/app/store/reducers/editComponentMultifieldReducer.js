const editComponentMultifieldReducer = (value = {}, action) => {
  if (action.type === 'ADD_MUTLIFIELD_ITEM') {
    return [
      ...value,
      {
        itemCaption: action.itemCaption,
        itemValue: action.itemValue,
      },
    ];
  }

  if (action.type === 'DELETE_MUTLIFIELD_ITEM') {
    return null;
  }

  return value;
};

export default editComponentMultifieldReducer;
