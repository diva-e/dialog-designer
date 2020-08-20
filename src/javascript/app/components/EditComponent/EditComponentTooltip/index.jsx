import React from 'react';
import PropTypes from 'prop-types';

const EditComponentTooltip = ({
  id,
  isValid,
  description,
}) => {

  if (!description && isValid) {
    return null;
  }

  return (
    <div className="tooltip-wrapper">
      <coral-icon
        icon="info"
        size="S"
        id={`targetComponent_${id}`}
        data-is-error={!isValid}
        data-test={description}
        className="coral-Form-fieldinfo"
      />
      <coral-tooltip
        placement="right"
        target={`#targetComponent_${id}`}
        data-test={description}
        variant={!isValid ? 'error' : 'default'}
      >
        { description || (!isValid ? 'Current value is not valid' : null) }
      </coral-tooltip>
    </div>
  );
};

EditComponentTooltip.propTypes = {
  description: PropTypes.string,
  isValid: PropTypes.bool,
  id: PropTypes.string.isRequired,
};

EditComponentTooltip.defaultProps = {
  description: null,
  isValid: true,
};

export default EditComponentTooltip;


