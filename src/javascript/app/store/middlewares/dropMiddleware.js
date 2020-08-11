import objectPath from 'object-path';
import coralComponents from '../../data/coral-components';

const getFields = ({ what }) => {
  const comp = coralComponents.find(({ id }) => id === what);
  // todo prevent duplicate id of fields
  return comp.fields.map((field) => ({
    ...field,
    value: field.defaultValue || '',
  }));
};

const dropMiddleware = (store) => (next) => (action) => {

  if (action.type === 'DROP_NEW_COMPONENT') {
    // todo: map payload.properties to fields if editing existing components
    Object.assign(action.payload, { fields: getFields(action.payload) });
  }

  if (action.type === 'SAVE_EDIT_COMPONENT') {
    const { structure, editComponent } = store.getState();
    // todo: use objectpath.set when editing existing components
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
