import React from 'react';
import PropTypes from 'prop-types';
import EditComponentTooltip from '../EditComponentTooltip';

class EditComponentNumberfield extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    const nf = this.ref.current;
    nf.value = this.props.value;
    nf.addEventListener('change', this.onChange);
  }

  componentWillUnmount() {
    const nf = this.ref.current;
    nf.removeEventListener('change', this.onChange);
  }

  onChange({ target }) {
    const { updateFieldValue, id } = this.props;
    updateFieldValue(id, target.value);
  }

  render() {
    const {
      id,
      label,
      value,
      description,
      isValid,
      required,
      max,
      min,
      step,
    } = this.props;
    return (
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
          ref={this.ref}
          name={id}
          value={value}
          data-is-invalid={`${!isValid}`}
          labelledby={`label_${id}`}
          aria-labelledby={`label_${id}`}
        />
        <EditComponentTooltip
          description={description}
          isValid={isValid}
        />
      </>
    );
  }
}

EditComponentNumberfield.propTypes = {
  description: PropTypes.string,
  id: PropTypes.string.isRequired,
  isValid: PropTypes.bool.isRequired,
  label: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number,
  required: PropTypes.bool,
  step: PropTypes.number,
  updateFieldValue: PropTypes.func.isRequired,
  value: PropTypes.string,
};

EditComponentNumberfield.defaultProps = {
  description: null,
  label: null,
  max: 10000000,
  min: 0,
  required: false,
  step: 1,
  value: null,
};

export default EditComponentNumberfield;

