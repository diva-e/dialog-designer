import objectPath from 'object-path';
import constants from '../../data/coral-components/constants';

const deleteComponentMiddleware = (store) => (next) => (action) => {
  if (action.type !== 'START_DELETE_COMPONENT') {
    next(action);
    return;
  }

  const state = store.getState();
  const structure = state.structure;
  const path = state.contextmenu.path;
  // eslint-disable-next-line no-alert
  if (window.confirm(constants.messages.DELETE_CONFIRM)) {
    objectPath.del(structure, path);
    store.dispatch({
      type: 'SET_STRUCTURE',
      payload: { ...structure },
    });
  }

  next(action);
};

export default deleteComponentMiddleware;
