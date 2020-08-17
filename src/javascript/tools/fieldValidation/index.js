const isEmpty = (value) => value === null || value === undefined || value === '';

const isValid = (required, validationRegexString, value) => {
  if ((isEmpty(required) || !required) && isEmpty(validationRegexString)) {
    return true;
  }

  if (required && isEmpty(value)) {
    return false;
  }

  if (!isEmpty(validationRegexString)) {
    const vReg = new RegExp(validationRegexString);
    return vReg.test(value);
  }

  return true;
};

const fieldValidation = (fields) => fields.map((field) => ({
  ...field,
  isValid: isValid(field.required, field.validation, field.value),
}));

export default fieldValidation;
