/* eslint-disable no-trailing-spaces,no-empty */
import actionNames from '../actionNames';

const cutComponentMiddleware = () => (next) => (action) => {
  if (action.type !== actionNames.COMPONENT.CUT) {
    next(action);
    return;
  }

  // const { structure, contextmenu } = store.getState();
  // const currentPathArray = contextmenu.path.split('.');
  // const currentContainerPosition = parseInt(currentPathArray[currentPathArray.length - 1], 10);
  // currentPathArray.pop();
  // const containerPath = currentPathArray.join('.');
  // const container = objectPath.get(structure, containerPath) || null;
  //
  // store.dispatch({
  //   type: actionNames.STRUCTURE.CLIPBOARD.SET,
  //   payload: { ...structure },
  // });

  next(action);
};

export default cutComponentMiddleware;
