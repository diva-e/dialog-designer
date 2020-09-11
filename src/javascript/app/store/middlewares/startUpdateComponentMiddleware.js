import objectPath from 'object-path';
import actionNames from '../actionNames';

const startUpdateComponentMiddleware = (store) => (next) => (action) => {
  if (action.type !== actionNames.COMPONENT.UPDATE) {
    next(action);
    return;
  }

  const state = store.getState();
  const path = state.contextmenu.path;
  const rawChild = objectPath.get(state.structure, path) || null;
  const componentToUpdate = {
    what: rawChild.type,
    where: {
      path,
      mode: 'update',
    },
    children: rawChild.children,
    fields: rawChild.properties,
  };

  Object.assign(action, {
    payload: componentToUpdate,
  });

  next(action);
};

export default startUpdateComponentMiddleware;
