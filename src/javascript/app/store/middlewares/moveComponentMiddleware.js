/* eslint-disable no-trailing-spaces,no-empty */
import objectPath from 'object-path';
import actionNames from '../actionNames';

const moveInContainer = (container, fromIndex, toIndex) => {
  const containerElement = container[fromIndex];
  container.splice(fromIndex, 1);
  container.splice(toIndex, 0, containerElement);
};

const moveComponentMiddleware = (store) => (next) => (action) => {
  if (action.type !== actionNames.COMPONENT.MOVE_UP && action.type !== actionNames.COMPONENT.MOVE_DOWN) {
    next(action);
    return;
  }

  const { structure, contextmenu } = store.getState();
  const currentPathArray = contextmenu.path.split('.');
  const currentContainerPosition = parseInt(currentPathArray[currentPathArray.length - 1], 10);
  currentPathArray.pop();
  const containerPath = currentPathArray.join('.');
  const container = objectPath.get(structure, containerPath) || null;

  if (action.type === actionNames.COMPONENT.MOVE_UP) {
    if (container.length > 1 && currentContainerPosition > 0) {
      moveInContainer(container, currentContainerPosition, currentContainerPosition - 1);
    }
  }

  if (action.type === actionNames.COMPONENT.MOVE_DOWN) {
    if (currentContainerPosition < container.length - 1) {
      moveInContainer(container, currentContainerPosition, currentContainerPosition + 1);
    }
  }

  store.dispatch({
    type: actionNames.STRUCTURE.SET,
    payload: { ...structure },
  });

  next(action);
};

export default moveComponentMiddleware;
