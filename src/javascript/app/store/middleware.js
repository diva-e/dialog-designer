const middleware = (/* store */) => (next) => (action) => {

  // const state = store.getState();
  // console.log(state);

  switch (action.type) {
    default:
      break;
  }

  return next(action);
};

export default middleware;
