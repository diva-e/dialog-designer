import React from 'react';
import addClassesToRef from '../../../../tools/addClassesToRef';

const EditComponentNumberfield = ({ id, label, value, description, isValid, required, max, min, step, updateFieldValue }) => (
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
    { description || !isValid ? (
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
          <coral-tooltip-content className="_coral-Tooltip-label">{!isValid ? 'Current value is not valid' : description}</coral-tooltip-content>
        </coral-tooltip>
      </>
    ) : (
      <span />
    )}

  </>
);

export default EditComponentNumberfield;
