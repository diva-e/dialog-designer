import React from 'react';

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
    const { label, value, isValid, required } = this.props;
    return (
      <>
        <label
          className="coral-Form-fieldlabel"
          invalid={`${!isValid}`}
        >
          {label}
          {required ? ' *' : ''}
        </label>
        <coral-select
          value={value}
          ref={this.ref}
          invalid={`${!isValid}`}
        />
      </>
    );
  }
}

export default EditComponentSelect;
