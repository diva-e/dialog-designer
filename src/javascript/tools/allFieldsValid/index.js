const allFieldsValid = (fields) => (
  !fields.find(({ isValid }) => !isValid)
);

export default allFieldsValid;
