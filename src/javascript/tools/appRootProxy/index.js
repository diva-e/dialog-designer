import coralComponents from '../../app/data/coral-components';

// the document proxy changes the function "createElement"
// if a coral component is detected, it will call another creator function
const documentProxy = new Proxy(document, {
  get: (target, prop) => {
    if (prop === 'createElement') {
      return (nodeName, options) => {

        if (!options || !options.is) {
          return document.createElement(nodeName, options);
        }

        const coralComp = coralComponents.find(({ createNode }) => (
          createNode && createNode.is === options.is
        ));

        if (coralComp && coralComp.createNode && coralComp.createNode.creator) {
          return coralComp.createNode.creator();
        }

        return document.createElement(nodeName, options);
      };
    }

    if (typeof target[prop] === 'function') {
      return target[prop].bind(target);
    }

    return target[prop];
  },
});

// the proxies approot tricks react into receiving a "fake" ownerDocument
const appRootProxy = (node) => (
  new Proxy(node, {
    get: (target, prop) => {
      if (typeof target[prop] === 'function') {
        return target[prop].bind(target);
      }

      if (prop === 'ownerDocument') {
        return documentProxy;
      }

      return target[prop];
    },
  })
);

export default appRootProxy;
