import React from 'react';
import PropTypes from 'prop-types';

import EditComponentTooltip from '../EditComponentTooltip';

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
    const {
      id,
      label,
      value,
      description,
      isValid,
      required,
    } = this.props;
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
        <EditComponentTooltip
          description={description}
          isValid={isValid}
          id={id}
        />
      </>
    );
  }
}

EditComponentSelect.propTypes = {
  description: PropTypes.string,
  id: PropTypes.string.isRequired,
  isValid: PropTypes.bool.isRequired,
  label: PropTypes.string,
  options: PropTypes.object.isRequired,
  required: PropTypes.bool,
  updateFieldValue: PropTypes.func.isRequired,
  value: PropTypes.string,
};

EditComponentSelect.defaultProps = {
  description: null,
  label: null,
  required: false,
  value: null,
};

export default EditComponentSelect;
