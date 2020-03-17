const exampleReducer = (value = false, action) => {
  switch (action.type) {
    case 'TOGGLE_EXAMPLE':
      return !value;
    default:
      return value;
  }
};

export default exampleReducer;
