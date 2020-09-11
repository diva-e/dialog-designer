import objectPath from 'object-path';
import actionNames from '../actionNames';

const startCreateComponentMiddleware = (store) => (next) => (action) => {
  if (action.type === 'START_EDIT_COMPONENT') {
    const { structure } = store.getState();
    const componentData = objectPath.get(structure, action.payload);
    store.dispatch({
      type: actionNames.COMPONENT.DROP,
      payload: {
        ...componentData,
        what: componentData.type,
        where: action.payload,
      },
    });
  }

  next(action);
};

export default startCreateComponentMiddleware;
