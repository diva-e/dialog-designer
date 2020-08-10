const updateField = (value, payload) => {
  const fields = value.fields.map((field) => {
    if (field.id === payload.field) {
      return {
        ...field,
        value: payload.value,
      };
    }

    return field;
  });

  return {
    ...value,
    fields,
  };
};


const newComponentReducer = (value = null, action) => {
  switch (action.type) {
    case 'DROP_NEW_COMPONENT':
      return action.payload;
    case 'UPDATE_EDIT_FIELD_VALUE':
      return updateField(value, action.payload);
    case 'SAVE_EDIT_COMPONENT':
    case 'CLOSE_EDIT_COMPONENT':
      return null;
    default:
      return value;
  }
};

export default newComponentReducer;
