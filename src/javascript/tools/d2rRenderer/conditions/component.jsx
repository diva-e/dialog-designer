import React from 'react';

const component = {
  condition: (node) => (
    node.classList && node.classList.contains('coral-Form-fieldwrapper')
  ),
  action: (node, key, level, parser) => (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events
    <div
      className="coral-Form-fieldwrapper"
      title={node.dataset.title}
      key={key}
      // onClick={() => {
      //   this.props.startEdit(node.dataset.path);
      // }}
    >
      { parser.prepareChildren(node.childNodes, level) }
    </div>
  ),
};

export default component;
