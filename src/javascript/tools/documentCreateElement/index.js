import coralComponents from '../../app/data/coral-components';

const originalFn = document.createElement;

/*
* This Function monkeypatched document.createElement !!!!!
* This is evil and should not be used...
* */

document.createElement = (nodeName, options) => {

  if (!options || !options.is) {
    return originalFn(nodeName, options);
  }

  const coralComp = coralComponents.find(({ createNode }) => (
    createNode && createNode.is === options.is
  ));

  if (coralComp && coralComp.createNode && coralComp.createNode.creator) {
    return coralComp.createNode.creator();
  }

  return originalFn(nodeName, options);
};

document.createElement.bind(document);
