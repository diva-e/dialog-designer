import React from 'react';
import PropTypes from 'prop-types';

import EditComponentTooltip from '../EditComponentTooltip';

class EditComponentMultifield extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    const select = this.ref.current;

    // this.props.options.forEach((option) => {
    //   select.items.add({
    //     value: option.value,
    //     content: {
    //       textContent: option.caption,
    //     },
    //   });
    // });

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
      isValid,
      label,
      value,
      description,
      required,
      updateFieldValue,
    } = this.props;
    return (
      <>
        <label
          id={`label_${id}`}
          className="coral-Form-fieldlabel"
        >
          {label}
          {required ? ' *' : ''}
        </label>
        <input
          className="coral-Form-field _coral-Textfield"
          type="text"
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

        <coral-multifield
          ref={this.ref}
        >
          <coral-multifield-item>
            <input
              className="coral-Form-field _coral-Textfield"
              type="text"
              name={`key_${id}`}
              variant="default"
              value={value}
              placeholder="key"
            />
            <input
              className="coral-Form-field _coral-Textfield"
              type="text"
              name={`value_${id}`}
              variant="default"
              value={value}
              placeholder="value"
            />
          </coral-multifield-item>
          <button coral-multifield-add type="button" is="coral-button">Add an option</button>
          <template coral-multifield-template>
            <input
              className="coral-Form-field _coral-Textfield"
              type="text"
              name={`key_${id}`}
              variant="default"
              value={value}
            />
            <input
              className="coral-Form-field _coral-Textfield"
              type="text"
              name={`value_${id}`}
              variant="default"
              value={value}
            />
          </template>
        </coral-multifield>

        <EditComponentTooltip
          description={description}
          isValid={isValid}
        />
      </>
    );
  }
}

EditComponentMultifield.propTypes = {
  description: PropTypes.string,
  id: PropTypes.string.isRequired,
  isValid: PropTypes.bool.isRequired,
  required: PropTypes.bool,
  label: PropTypes.string,
  updateFieldValue: PropTypes.func.isRequired,
  value: PropTypes.string,
};

EditComponentMultifield.defaultProps = {
  description: null,
  label: null,
  value: null,
  required: false,
};

export default EditComponentMultifield;
