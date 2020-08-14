import React from 'react';
import addClassesToRef from '../../../../tools/addClassesToRef';

class EditComponentSelect extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    const select = this.ref.current;

    this.props.options.forEach((option) => {
      select.items.add({
        value: option.value,
        content: {
          textContent: option.caption,
        },
      });
    });

    select.value = this.props.value;

    select.addEventListener('change', this.onChange);
  }

  componentWillUnmount() {
    const select = this.ref.current;
    select.removeEventListener('change', this.onChange);
  }

  onChange({ target }) {
    const { updateFieldValue, id } = this.props;
    updateFieldValue(id, target.value);
  }

  render() {
    const { label, value, description, isValid, required } = this.props;
    return (
      <>
        <label
          className="coral-Form-fieldlabel"
          data-is-invalid={`${!isValid}`}
        >
          {label}
          {required ? ' *' : ''}
        </label>
        <coral-select
          value={value}
          ref={this.ref}
          data-is-invalid={`${!isValid}`}
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
  }
}

export default EditComponentSelect;
