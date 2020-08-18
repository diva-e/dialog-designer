import React from 'react';
import PropTypes from 'prop-types';

import EditComponentTooltip from '../EditComponentTooltip';
import EditComponentMultifieldItem from './EditComponetMultifieldItem';

class EditComponentMultifield extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.value || [],
    };
    this.updateParent = this.updateParent.bind(this);
  }

  addMultifieldItem() {
    const { items } = this.state;
    items.push({
      itemValue: '',
      itemCaption: '',
    });
    this.setState({
      items: [...items],
    }, this.updateParent);
  }

  deleteMultifieldItem(index) {
    console.log('delete');
    // , this.updateParent
  }

  updateMultifieldItem(updatedItem, updateIndex) {
    console.log('update', updatedItem);
    const { items } = this.state;

    this.setState({
      items: [...items.map((item, index) => (
        (index === updateIndex) ? updatedItem : item
      ))],
    }, this.updateParent);
  }

  updateParent() {
    console.log(this.state);
    this.props.updateFieldValue(this.props.id, this.state.items);
  }

  render() {
    let {
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

        <ul>
          {this.state.items.map((item, index) => (
            <EditComponentMultifieldItem
              key={index}
              itemValue={item.itemValue}
              itemCaption={item.itemCaption}
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
          Add an option
        </button>

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
