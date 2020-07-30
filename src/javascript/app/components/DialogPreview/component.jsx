import React, { Component } from 'react';
import Dom2react from 'dom-to-react';
import DropTarget from '../DropTarget';

class DialogPreview extends Component {
  constructor(props) {
    super(props);

    this.d2r = new Dom2react([
      {
        condition: (node) => (
          node.nodeName.toLowerCase() === 'droptarget'
        ),
        action: (node, key) => (
          <DropTarget
            key={key}
            accepts={node.dataset.accept.split(',')}
            path={node.dataset.path}
            dropped={() => {}}
          />
        ),
      },
      {
        condition: (node) => (
          node.classList && node.classList.contains('coral-Form-fieldwrapper')
        ),
        action: (node, key, level, parser) => (
          // eslint-disable-next-line jsx-a11y/no-static-element-interactions
          <div
            className="coral-Form-fieldwrapper"
            title={node.dataset.title}
            key={key}
            onClick={() => {
              this.props.startEdit(node.dataset.path);
            }}
          >
            { parser.prepareChildren(node.childNodes, level) }
          </div>
        ),
      },
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
