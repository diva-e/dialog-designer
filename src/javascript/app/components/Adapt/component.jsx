// eslint-disable-next-line import/no-cycle
import dom2reactRenderer from '../../../tools/dom2reactRenderer';

const Adapt = ({ children }) => (
  dom2reactRenderer().prepareChildren(children, 0)
);

export default Adapt;
