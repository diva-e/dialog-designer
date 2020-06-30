import objectPath from 'object-path';

import coralComponents from '../../data/coral-components';

const getFields = ({ what }) => {
  const comp = coralComponents.find(({ id }) => id === what);

  const fields = {};
  const findFieldsRegex = /{([\d\w]+)}/g;

  let found = findFieldsRegex.exec(comp.src);
  while (found) {
    fields[found[1]] = found[1];
    found = findFieldsRegex.exec(comp.src);
  }

  found = findFieldsRegex.exec(comp.xml);
  while (found) {
    fields[found[1]] = found[1];
    found = findFieldsRegex.exec(comp.xml);
  }

  return fields;
};


const dropMiddleware = (store) => (next) => (action) => {

  if (action.type === 'DROP_NEW_COMPONENT') {
    Object.assign(action.payload, { fields: getFields(action.payload) });
  }

  if (action.type === 'SAVE_EDIT_COMPONENT') {
    const { structure, editComponent } = store.getState();

    objectPath.push(structure, editComponent.where.path, {
      type: editComponent.what,
      properties: editComponent.fields,
      children: {},
    });

    store.dispatch({
      type: 'SET_STRUCTURE',
      payload: { ...structure },
    });
  }

  next(action);
};

export default dropMiddleware;
