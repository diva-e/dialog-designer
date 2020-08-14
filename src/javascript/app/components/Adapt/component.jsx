
const Adapt = ({ children, parser, level }) => (
  parser.prepareChildren(children, level)
);

export default Adapt;
