const addClassesToRef = (...classes) => (node) => {
  if (node) {
    node.classList.add(...classes);
  }
};

export default addClassesToRef;
