import React from 'react';

const FormFieldWrapper = ({ node, level, parser, openContentMenu }) => (
  <div
    className="coral-Form-fieldwrapper"
    title={node.dataset.title}
    onContextMenu={(ev) => {
      ev.preventDefault();
      openContentMenu(node.dataset.path, ev.pageX, ev.pageY);
    }}
  >
    { parser.prepareChildren(node.childNodes, level) }
  </div>
);

export default FormFieldWrapper;
