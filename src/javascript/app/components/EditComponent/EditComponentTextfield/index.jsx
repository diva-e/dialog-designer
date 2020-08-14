import React from 'react';
import EditComponentTooltip from '../EditComponentTooltip';

const EditComponentTextfield = ({ id, label, value, description, updateFieldValue, isValid, required }) => (
  <>
    <label
      id={`label_${id}`}
      className="coral-Form-fieldlabel"
      data-is-invalid={`${!isValid}`}
    >
      {label}
      {required ? ' *' : ''}
    </label>
    <input
      className="coral-Form-field _coral-Textfield"
      type="text"
      key={id}
      name={id}
      labelledby={`label_${id}`}
      id={id}
      aria-labelledby={`label_${id}`}
      variant="default"
      data-is-invalid={`${!isValid}`}
      value={value}
      onChange={({ target }) => updateFieldValue(id, target.value)}
    />
    <EditComponentTooltip
      description={description}
      isValid={isValid}
    />
  </>
);

export default EditComponentTextfield;
