const conditionalRenderCheck = (dom) => {
  [...dom.querySelectorAll('[data-test]')].forEach((toBeCheckedElement) => {
    if (!toBeCheckedElement.getAttribute('data-test')) {
      toBeCheckedElement.parentNode.removeChild(toBeCheckedElement);
    } else {
      toBeCheckedElement.removeAttribute('data-test');
    }
  });
  return dom;
};

export default conditionalRenderCheck;
