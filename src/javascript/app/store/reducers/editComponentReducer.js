import actionNames from '../actionNames';

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
    case actionNames.COMPONENT.DROP:
    case actionNames.COMPONENT.UPDATE:
      return action.payload;
    case actionNames.UI.EDITCOMPONENT.UPDATE_FIELDVALUE:
      return updateField(value, action.payload);
    case actionNames.UI.EDITCOMPONENT.SAVE:
    case actionNames.UI.EDITCOMPONENT.CLOSE:
      return null;
    default:
      return value;
  }
};

export default newComponentReducer;
