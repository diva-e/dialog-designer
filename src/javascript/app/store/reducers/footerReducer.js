const footerReducer = (value = null, action) => {
  switch (action.type) {
    case 'DOWNLOAD_XML':
      alert('NOT YET IMPLEMENTED');
      return null;
    case 'DOWNLOAD_JSON':
      alert('NOT YET IMPLEMENTED');
      return null;
    case 'EXECUTE_COMPLETE_RESET':
      window.localStorage.removeItem('dndd-test-structure');
      window.location.reload();
      return null;
    default:
      return value;
  }
};

export default footerReducer;
