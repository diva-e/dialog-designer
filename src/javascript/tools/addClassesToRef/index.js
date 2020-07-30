const addClassesToRef = (...classes) => (node) => {
  console.log(classes);
  if (node) {
    node.classList.add(...classes);
  }
};

export default addClassesToRef;
