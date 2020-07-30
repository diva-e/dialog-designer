import React from 'react';

const EditComponentSelect = ({ id, label, value, options, updateFieldValue }) => (
  <>
    <label
      className="coral-Form-fieldlabel"
    >
      {label}
    </label>
    <select
      value={value}
      className="coral3-Select"
      onChange={({ target }) => updateFieldValue(id, target.value)}
    >
      {
        options.map(({ caption, value: optionValue }) => (
          <option
            key={optionValue}
            value={optionValue}
          >
            {caption}
          </option>
        ))
      }
    </select>
  </>
);

export default EditComponentSelect;
