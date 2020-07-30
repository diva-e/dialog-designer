import React from 'react';

const EditComponentCheckbox = ({ id, label, updateFieldValue }) => (
  <div
    name={id}
    value="true"
    data-foundation-validation=""
    data-validation=""
    className="coral-Form-field _coral-Checkbox"
  >
    <input
      type="checkbox"
      handle="input"
      className="_coral-Checkbox-input"
      id={id}
      name={id}
      value="true"
      onChange={({ target }) => updateFieldValue(id, target.checked)}
    />
    <span className="_coral-Checkbox-box" handle="checkbox" />
    <label className="_coral-Checkbox-label" handle="labelWrapper" htmlFor="coral-id-615">
      <span className="u-coral-screenReaderOnly" handle="screenReaderOnly" hidden="">Select</span>
      <coral-checkbox-label>{label}</coral-checkbox-label>
    </label>
  </div>
);

export default EditComponentCheckbox;
