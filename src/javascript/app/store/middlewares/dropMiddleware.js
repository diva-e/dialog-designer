import objectPath from 'object-path';

const dropMiddleware = (store) => (next) => (action) => {
  next(action);

  if (action.type === 'DROP_NEW_COMPONENT') {
    const { structure } = store.getState();

    objectPath.push(structure, action.payload.where.path, {
      type: action.payload.what,
      properties: {},
      children: [],
    });

    store.dispatch({
      type: 'SET_STRUCTURE',
      payload: { ...structure },
    });
  }
};

export default dropMiddleware;
