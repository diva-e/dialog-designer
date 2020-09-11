const conditionalRenderCheck = (dom) => {
  [...dom.querySelectorAll('[data-test]')].forEach((toBeCheckedElement) => {
    if (!toBeCheckedElement.getAttribute('data-test')) {
      toBeCheckedElement.parentNode.removeChild(toBeCheckedElement);
    } else {
      toBeCheckedElement.removeAttribute('data-test');
    }
  });

  [...dom.querySelectorAll('*')].forEach((toBeCheckedElement) => {
    const currentAttributes = toBeCheckedElement.getAttributeNames().filter((attribute) => attribute.startsWith('data-optional.'));
    for (const attribute of currentAttributes) {
      const attributeValue = toBeCheckedElement.getAttribute(attribute);
      if (attributeValue === '' || attributeValue === '{Boolean}false' || attributeValue === 'false') {
        toBeCheckedElement.removeAttribute(attribute);
      } else {
        const preservedValue = attributeValue;
        toBeCheckedElement.removeAttribute(attribute);
        const cleanedAttributeName = attribute.replace('data-optional.', '');
        toBeCheckedElement.setAttribute(cleanedAttributeName, preservedValue);
      }
    }
  });

  return dom;
};

export default conditionalRenderCheck;
