/* eslint-disable no-trailing-spaces,no-empty */
import objectPath from 'object-path';
import actionNames from '../actionNames';

const pushInContainer = (/* container, toPushElement, toIndex */) => {
  // todo: implement
};

const pasteComponentMiddleware = (store) => (next) => (action) => {
  if (action.type !== actionNames.COMPONENT.PASTE_BEFORE && action.type !== actionNames.COMPONENT.PASTE_AFTER) {
    next(action);
    return;
  }

  const { structure, contextmenu } = store.getState();
  const currentPathArray = contextmenu.path.split('.');
  const currentContainerPosition = parseInt(currentPathArray[currentPathArray.length - 1], 10);
  currentPathArray.pop();
  const containerPath = currentPathArray.join('.');
  const container = objectPath.get(structure, containerPath) || null;

  if (action.type === actionNames.COMPONENT.PASTE_BEFORE) {
    if (container.length > 1 && currentContainerPosition > 0) {
      pushInContainer(container, currentContainerPosition - 1);
    }
  }

  if (action.type === actionNames.COMPONENT.PASTE_AFTER) {
    if (currentContainerPosition < container.length - 1) {
      pushInContainer(container, currentContainerPosition + 1);
    }
  }

  // store.dispatch({
  //   type: 'SET_STRUCTURE',
  //   payload: { ...structure },
  // });

  next(action);
};

export default pasteComponentMiddleware;
