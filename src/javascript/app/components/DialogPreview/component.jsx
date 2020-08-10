import React, { Component } from 'react';
import dom2reactRenderer from '../../../tools/d2rRenderer';

class DialogPreview extends Component {
  constructor(props) {
    super(props);

    this.d2r = dom2reactRenderer();
  }

  render() {
    const { formDom } = this.props;
    return (
      <div className="dialog-preview">
        {this.d2r.prepareNode(formDom)}
      </div>
      // <div className="dialog-preview" ref={(node) => node.appendChild(formDom)} />
    );
  }
}

export default DialogPreview;
