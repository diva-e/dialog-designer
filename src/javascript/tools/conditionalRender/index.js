const conditionalRenderCheck = (dom) => {
  [...dom.querySelectorAll('[data-test]')].forEach((toBeCheckedElement) => {
    console.log(toBeCheckedElement.dataset.test);
    // eslint-disable-next-line no-extra-boolean-cast
    if (!toBeCheckedElement.dataset.test) {
      toBeCheckedElement.parentNode.removeChild(toBeCheckedElement);
    }
  });
  return dom;
};

export default conditionalRenderCheck;
