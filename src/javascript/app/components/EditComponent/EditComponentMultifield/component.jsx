import React from 'react';
import PropTypes from 'prop-types';

import EditComponentTooltip from '../EditComponentTooltip';
import EditComponentMultifieldItem from './EditComponetMultifieldItem/component';

const EditComponentMultifield = ({
  id,
  isValid,
  label,
  value,
  items,
  description,
  required,
  updateFieldValue,
  addMultifieldItem,
}) => (
  <>
    <label
      id={`label_${id}`}
      className="coral-Form-fieldlabel"
    >
      {label}
      {required ? ' *' : ''}
    </label>

    <input
      className="coral-Form-field _coral-Textfield"
      type="text"
      name={id}
      labelledby={`label_${id}`}
      id={id}
      aria-labelledby={`label_${id}`}
      variant="default"
      value={value}
      placeholder="Fallback CSV"
      onChange={({ target }) => updateFieldValue(id, target.value)}
    />

    <ul>
      {items.map((item) => (
        <EditComponentMultifieldItem
          key={item.itemValue}
          {...item}
        />
      ))}
    </ul>

    <button
      type="button"
      is="coral-button"
      onClick={() => addMultifieldItem()}
    >
      Add an option
    </button>

    <EditComponentTooltip
      description={description}
      isValid={isValid}
    />
  </>
);

EditComponentMultifield.propTypes = {
  description: PropTypes.string,
  id: PropTypes.string.isRequired,
  isValid: PropTypes.bool.isRequired,
  required: PropTypes.bool,
  label: PropTypes.string,
  updateFieldValue: PropTypes.func.isRequired,
  addMultifieldItem: PropTypes.func.isRequired,
  value: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    itemValue: PropTypes.number.isRequired,
    itemCaption: PropTypes.bool.isRequired,
  }).isRequired),
};

EditComponentMultifield.defaultProps = {
  description: null,
  label: null,
  value: null,
  required: false,
  items: [],
};

export default EditComponentMultifield;
