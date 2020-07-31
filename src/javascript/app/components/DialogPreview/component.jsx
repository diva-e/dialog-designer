import React, { Component } from 'react';
import Dom2react from 'dom-to-react';
import droptarget from './conditions/droptarget';
import component from './conditions/component';
import adapt from './conditions/adapt';

class DialogPreview extends Component {
  constructor(props) {
    super(props);

    this.d2r = new Dom2react([
      droptarget,
      component,
      adapt,
    ]);
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
