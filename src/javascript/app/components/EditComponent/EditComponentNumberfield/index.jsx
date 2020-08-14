import React from 'react';
import EditComponentTooltip from '../EditComponentTooltip';

const EditComponentNumberfield = ({
  id,
  label,
  value,
  description,
  isValid,
  required,
  max,
  min,
  step,
  updateFieldValue,
}) => (
  <>
    <label
      id={`label_${id}`}
      className="coral-Form-fieldlabel"
      data-is-invalid={`${!isValid}`}
    >
      {label}
      {required ? ' *' : ''}
    </label>
    <coral-numberinput
      max={max}
      min={min}
      step={step}
      key={id}
      name={id}
      value={value}
      data-is-invalid={`${!isValid}`}
      labelledby={`label_${id}`}
      aria-labelledby={`label_${id}`}
      onChange={({ target }) => updateFieldValue(id, target.value)}
    />

    <EditComponentTooltip
      description={description}
      isValid={isValid}
    />

  </>
);

export default EditComponentNumberfield;
