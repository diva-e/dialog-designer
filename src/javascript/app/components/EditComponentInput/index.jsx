import React from 'react';

const EditComponentInput = ({ name, value, updateFieldValue }) => (
  <>
    <label
      id={`label_${name}`}
      className="coral-Form-fieldlabel"
    >
      {name}
    </label>
    <input
      className="coral-Form-field _coral-Textfield"
      type="text"
      key={name}
      name={name}
      labelledby={`label_${name}`}
      data-foundation-validation=""
      data-validation=""
      id={name}
      aria-labelledby={`label_${name}`}
      variant="default"
      value={value}
      onChange={({ target }) => updateFieldValue(name, target.value)}
    />
  </>
);

export default EditComponentInput;
