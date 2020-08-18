import React from 'react';
import PropTypes from 'prop-types';

class ItemProducer extends React.Component {

  getRenderedItems() {
    return items.map((item) => `${template}`);
  }

  render() {
    let {
      template,
      items,
    } = this.props;
    return (
      <>
        { this.getRenderedItems() }
      </>
    );
  }
}

ItemProducer.propTypes = {
  template: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

export default ItemProducer;
