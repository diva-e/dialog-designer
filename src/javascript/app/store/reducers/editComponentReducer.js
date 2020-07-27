const newComponentReducer = (value = null, action) => {
  switch (action.type) {
    case 'DROP_NEW_COMPONENT':
      return action.payload;
    case 'UPDATE_EDIT_FIELD_VALUE':
      console.log(action.payload);
      return {
        ...value,
        fields: {
          ...value.fields,
          [action.payload.field]: {
            ...value.fields[action.payload.field],
            value: action.payload.value,
          },
        },
      };
    case 'SAVE_EDIT_COMPONENT':
    case 'CLOSE_EDIT_COMPONENT':
      return null;
    default:
      return value;
  }
};

export default newComponentReducer;
