import objectPath from 'object-path';

import coralComponents from '../../data/coral-components';

const getFields = ({ what }) => {
  const comp = coralComponents.find(({ id }) => id === what);

  const fields = {};
  const findFieldsRegex = /{(\w+:)?([\d\w]+)}/g;

  let found = findFieldsRegex.exec(comp.src);
  while (found) {
    fields[found[2]] = {
      type: found[1] ? found[1].replace(':', '') : 'String',
      name: found[2],
      value: '',
    };
    found = findFieldsRegex.exec(comp.src);
  }

  found = findFieldsRegex.exec(comp.xml);
  while (found) {
    fields[found[2]] = {
      type: found[1] ? found[1].replace(':', '') : 'String',
      name: found[2],
      value: '',
    };
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

  if (action.type === 'CLOSE_EDIT_COMPONENT') {
    // nothing for now
  }

  next(action);
};

export default dropMiddleware;
