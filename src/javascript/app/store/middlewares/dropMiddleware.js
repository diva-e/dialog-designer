import objectPath from 'object-path';
import { walkObject } from 'walk-object';
import coralComponents from '../../data/coral-components';

const getFields = ({ what }, getUniqueFieldValue) => {
  const comp = coralComponents.find(({ id }) => id === what);
  // todo prevent duplicate id of fields
  return comp.fields.map((field) => {

    let value = field.defaultValue || '';
    if (field.uniqueAutoValue) {
      value = getUniqueFieldValue(field.id, what);
    }

    return ({
      ...field,
      value,
    });
  });
};

const getUniqueFieldValue = (store) => (fieldName, prefix) => {

  const allMatchingValues = [];

  walkObject(store.getState().structure, ({ value }) => {
    if (value.id === fieldName) {
      if (typeof value.value === 'string') {
        allMatchingValues.push(value.value);
      }
    }
  });

  let i = 0;
  let uniqueValue = prefix;

  while (allMatchingValues.includes(uniqueValue)) {
    i += 1;
    uniqueValue = `${prefix}_${i}`;
  }

  return uniqueValue;
};


const dropMiddleware = (store) => (next) => (action) => {

  if (action.type === 'DROP_NEW_COMPONENT') {

    const fields = getFields(action.payload, getUniqueFieldValue(store));

    Object.assign(action.payload, { fields });
  }

  if (action.type === 'SAVE_EDIT_COMPONENT') {
    const { structure, editComponent } = store.getState();
    switch (editComponent.where.mode) {
      case 'update':
        objectPath.set(structure, editComponent.where.path, {
          type: editComponent.what,
          properties: editComponent.fields,
          children: editComponent.children,
        });
        break;
      default:
        objectPath.push(structure, editComponent.where.path, {
          type: editComponent.what,
          properties: editComponent.fields,
          children: {},
        });
    }

    store.dispatch({
      type: 'SET_STRUCTURE',
      payload: { ...structure },
    });
  }

  if (action.type === 'CLOSE_EDIT_COMPONENT') {
    // nothing for now
  }

  next(action);
};

export default dropMiddleware;
