import React from 'react';
import PropTypes from 'prop-types';

import EditComponentTooltip from '../EditComponentTooltip';
import EditComponentMultifieldItem from './EditComponetMultifieldItem';

class EditComponentMultifield extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || [],
    };
    this.updateParent = this.updateParent.bind(this);
  }

  addMultifieldItem() {
    const { value } = this.state;
    value.push({
      itemValue: '',
      itemCaption: '',
      itemId: '',
    });
    this.setState({
      value: [...value],
    }, this.updateParent);
  }

  deleteMultifieldItem(index) {
    const { value } = this.state;
    value.splice(index, 1);
    this.setState({
      value: [...value],
    }, this.updateParent);
  }

  updateMultifieldItem(updatedItem, updateIndex) {
    const { value } = this.state;

    this.setState({
      value: [...value.map((item, index) => (
        (index === updateIndex) ? updatedItem : item
      ))],
    }, this.updateParent);
  }

  updateParent() {
    this.props.updateFieldValue(this.props.id, this.state.value);
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
      <div className="edit-multifield">
        <label
          id={`label_${id}`}
          className="coral-Form-fieldlabel"
        >
          {label}
          {required ? ' *' : ''}
        </label>

        <ul>
          {this.state.value.map((item, index) => (
            <EditComponentMultifieldItem
              key={index}
              itemValue={item.itemValue}
              itemCaption={item.itemCaption}
              itemId={`item_${index}`}
              deleteMultifieldItem={() => {
                this.deleteMultifieldItem(index);
              }}
              updateMultifieldItem={(updatedItem) => {
                this.updateMultifieldItem(updatedItem, index);
              }}
            />
          ))}
        </ul>

        <button
          type="button"
          is="coral-button"
          onClick={() => this.addMultifieldItem()}
        >
          + Add an option
        </button>

        <EditComponentTooltip
          description={description}
          isValid={isValid}
        />
      </div>
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
  value: PropTypes.arrayOf(PropTypes.shape({
    itemValue: PropTypes.string.isRequired,
    itemCaption: PropTypes.string.isRequired,
  }).isRequired),
};

EditComponentMultifield.defaultProps = {
  description: null,
  label: null,
  required: false,
  value: null,
};

export default EditComponentMultifield;
