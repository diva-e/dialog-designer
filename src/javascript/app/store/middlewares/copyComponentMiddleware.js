/* eslint-disable no-trailing-spaces,no-empty */
import objectPath from 'object-path';

const copyComponentMiddleware = (store) => (next) => (action) => {
  if (action.type !== 'COPY_COMPONENT') {
    next(action);
    return;
  }

  const { structure, contextmenu } = store.getState();
  const currentPathArray = contextmenu.path.split('.');
  const currentContainerPosition = parseInt(currentPathArray[currentPathArray.length - 1], 10);
  currentPathArray.pop();
  const containerPath = currentPathArray.join('.');
  const container = objectPath.get(structure, containerPath) || null;

  store.dispatch({
    type: 'SET_STRUCTURE_CLIPBOARD',
    payload: { ...structure },
  });

  next(action);
};

export default copyComponentMiddleware;
