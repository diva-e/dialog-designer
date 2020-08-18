import React from 'react';
import PropTypes from 'prop-types';

const EditComponentMultifieldItem = ({
  itemCaption,
  itemValue,
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
      })}
    />
    :
    <input
      type="text"
      value={itemValue}
      onChange={({ target }) => updateMultifieldItem({
        itemCaption,
        itemValue: target.value,
      })}
    />
    <button
      is="coral-anchorbutton"
      icon="delete"
      variant="quiet"
      title="Delete"
      size="M"
      type="submit"
      onClick={() => deleteMultifieldItem()}
    >
      <coral-button-label className="_coral-Button-label" />
    </button>
  </li>
);

EditComponentMultifieldItem.propTypes = {
  itemCaption: PropTypes.string.isRequired,
  itemValue: PropTypes.string.isRequired,
  deleteMultifieldItem: PropTypes.func.isRequired,
  updateMultifieldItem: PropTypes.func.isRequired,
};

export default EditComponentMultifieldItem;
