const changeNodeName = (fromNode, toNodeName) => {
  const toNode = fromNode.ownerDocument.createElement(toNodeName);
  [...fromNode.attributes].forEach(({ nodeName, nodeValue }) => {
    toNode.setAttribute(nodeName, nodeValue);
  });
  toNode.innerHTML = fromNode.innerHTML;
  return toNode;
};

export default changeNodeName;
