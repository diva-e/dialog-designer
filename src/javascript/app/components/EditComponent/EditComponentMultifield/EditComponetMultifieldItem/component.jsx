import React from 'react';
import PropTypes from 'prop-types';

const EditComponentMultifieldItem = ({
  itemCaption,
  itemValue,
  itemId,
  deleteMultifieldItem,
  updateMultifieldItem,
}) => (
  <li>
    <input
      type="text"
      value={itemCaption}
      onChange={({ target }) => updateMultifieldItem({
        itemCaption: target.value,
        itemValue,
        itemId,
      })}
      className="coral-Form-field _coral-Textfield _coral-Textfield--key-value"
      placeholder="Caption"
    />
    &nbsp;
    <input
      type="text"
      value={itemValue}
      onChange={({ target }) => updateMultifieldItem({
        itemCaption,
        itemValue: target.value,
        itemId,
      })}
      className="coral-Form-field _coral-Textfield _coral-Textfield--key-value"
      placeholder="Value"
    />
    <button
      is="coral-anchorbutton"
      icon="delete"
      variant="quiet"
      title="Delete"
      size="M"
      type="button"
      onClick={() => deleteMultifieldItem()}
    >
      <coral-button-label className="_coral-Button-label" />
    </button>
  </li>
);

EditComponentMultifieldItem.propTypes = {
  itemCaption: PropTypes.string.isRequired,
  itemValue: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
  deleteMultifieldItem: PropTypes.func.isRequired,
  updateMultifieldItem: PropTypes.func.isRequired,
};

export default EditComponentMultifieldItem;
