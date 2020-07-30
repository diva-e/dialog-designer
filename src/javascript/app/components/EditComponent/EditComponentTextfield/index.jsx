import React from 'react';

const EditComponentTextfield = ({ id, value, updateFieldValue }) => (
  <>
    <label
      id={`label_${id}`}
      className="coral-Form-fieldlabel"
    >
      {id}
    </label>
    <input
      className="coral-Form-field _coral-Textfield"
      type="text"
      key={id}
      name={id}
      labelledby={`label_${id}`}
      data-foundation-validation=""
      data-validation=""
      id={id}
      aria-labelledby={`label_${id}`}
      variant="default"
      value={value}
      onChange={({ target }) => updateFieldValue(id, target.value)}
    />
  </>
);

export default EditComponentTextfield;
