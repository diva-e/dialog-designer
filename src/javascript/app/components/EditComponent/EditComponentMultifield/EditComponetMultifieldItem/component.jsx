import React from 'react';
import PropTypes from 'prop-types';

const EditComponentMultifieldItem = ({
  itemCaption,
  itemValue,
  deleteMultifieldItem,
}) => (
  <li>
    {itemCaption}
    -
    {itemValue}
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
};

export default EditComponentMultifieldItem;
