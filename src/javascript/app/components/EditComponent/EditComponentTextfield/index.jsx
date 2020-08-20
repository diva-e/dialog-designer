import React from 'react';
import PropTypes from 'prop-types';
import EditComponentTooltip from '../EditComponentTooltip';

const EditComponentTextfield = ({
  id,
  label,
  value,
  description,
  updateFieldValue,
  isValid,
  required,
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
    <input
      className="coral-Form-field _coral-Textfield"
      type="text"
      name={id}
      id={id}
      labelledby={`label_${id}`}
      aria-labelledby={`label_${id}`}
      variant="default"
      data-is-invalid={`${!isValid}`}
      value={value}
      onChange={({ target }) => updateFieldValue(id, target.value)}
    />
    <EditComponentTooltip
      description={description}
      isValid={isValid}
      id={id}
    />
  </>
);

EditComponentTextfield.propTypes = {
  description: PropTypes.string,
  id: PropTypes.string.isRequired,
  isValid: PropTypes.bool.isRequired,
  label: PropTypes.string,
  required: PropTypes.bool,
  updateFieldValue: PropTypes.func.isRequired,
  value: PropTypes.string,
};

EditComponentTextfield.defaultProps = {
  description: null,
  label: null,
  required: null,
  value: null,
};

export default EditComponentTextfield;
