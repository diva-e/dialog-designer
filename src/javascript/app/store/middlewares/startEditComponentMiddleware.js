import objectPath from 'object-path';

const startEditComponentMiddleware = (store) => (next) => (action) => {
  if (action.type === 'START_EDIT_COMPONENT') {
    const { structure } = store.getState();
    const componentData = objectPath.get(structure, action.payload);
    store.dispatch({
      type: 'DROP_NEW_COMPONENT',
      payload: {
        ...componentData,
        what: componentData.type,
        where: action.payload,
      },
    });
  }

  next(action);
};

export default startEditComponentMiddleware;
