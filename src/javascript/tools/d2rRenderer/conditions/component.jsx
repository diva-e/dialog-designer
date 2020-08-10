import React from 'react';
import FormFieldWrapper from "../../../app/components/FormFieldWrapper";

const component = {
  condition: (node) => (
    node.classList && node.classList.contains('coral-Form-fieldwrapper')
  ),
  action: (node, key, level, parser) => (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events
    <FormFieldWrapper
      key={key}
      node={node}
      level={level}
      parser={parser}
    />
  ),
};

export default component;
