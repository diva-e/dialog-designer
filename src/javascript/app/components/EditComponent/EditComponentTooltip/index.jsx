import React from 'react';
import PropTypes from 'prop-types';

import addClassesToRef from '../../../../tools/addClassesToRef';

const EditComponentTooltip = ({
  isValid,
  description,
}) => {

  if (!description && isValid) {
    return null;
  }

  return (
    <>
      <coral-icon
        ref={addClassesToRef('coral-Form-fieldinfo')}
        icon="infoCircle"
        alt="description"
        role="img"
        aria-label="description"
        size="S"
        data-is-error={!isValid}
      >
        <svg focusable="false" aria-hidden="true" className="_coral-Icon--svg _coral-Icon">
          <use xlinkHref="/dist/resources/spectrum-icons.svg#spectrum-icon-18-Info" />
        </svg>
      </coral-icon>
      <coral-tooltip
        target="_prev"
        placement="left"
        id="tooltip_{id}"
        x-placement="right"
        x-out-of-boundaries=""
        className="_coral-Overlay _coral-Tooltip _coral-Tooltip--default _coral-Tooltip--right"
        role="tooltip"
        variant={!isValid ? 'error' : 'default'}
        style={{
          position: 'absolute',
          willChange: 'transform',
          display: 'none',
          top: '0px',
          left: '0px',
          transform: 'translate3d(-5px, 0px, 0px)',
        }}
      >
        <span className=" _coral-Tooltip-tip" handle="tip" />
        <coral-tooltip-content
          className="_coral-Tooltip-label"
        >
          { description || (!isValid ? 'Current value is not valid' : null) }
        </coral-tooltip-content>
      </coral-tooltip>
    </>
  );
};

EditComponentTooltip.propTypes = {
  description: PropTypes.string,
  isValid: PropTypes.bool.isRequired,
};

EditComponentTooltip.defaultProps = {
  description: null,
};

export default EditComponentTooltip;


