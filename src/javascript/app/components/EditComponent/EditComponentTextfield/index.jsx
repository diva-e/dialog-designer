import React from 'react';
import addClassesToRef from '../../../../tools/addClassesToRef';

const EditComponentTextfield = ({ id, label, value, description, updateFieldValue }) => (
  <>
    <label
      id={`label_${id}`}
      className="coral-Form-fieldlabel"
    >
      {label}
    </label>
    <input
      className="coral-Form-field _coral-Textfield"
      type="text"
      key={id}
      name={id}
      labelledby={`label_${id}`}
      data-foundation-validation=""
      data-validation=""
      id={id}
      aria-labelledby={`label_${id}`}
      variant="default"
      value={value}
      onChange={({ target }) => updateFieldValue(id, target.value)}
    />

    { description ? (
      <>
        <coral-icon
          ref={addClassesToRef('coral-Form-fieldinfo')}
          icon="infoCircle"
          alt="description"
          role="img"
          aria-label="description"
          size="S"
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
          variant="default"
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
          <coral-tooltip-content className="_coral-Tooltip-label">{description}</coral-tooltip-content>
        </coral-tooltip>
      </>
    ) : (
      <span />
    )}
  </>
);

export default EditComponentTextfield;
