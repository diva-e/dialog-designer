import { connect } from 'react-redux';
import structureToDom from '../../../tools/structureToDom';

const testStructure = {
  type: 'coral-tabview',
  properties: {},
  children: {
    tabs: [
      {
        type: 'coral-tab',
        properties: {
          label: 'Tab 1',
        },
      },
      {
        type: 'coral-tab',
        properties: {
          label: 'Tab 2',
        },
      },
    ],
    panels: [
      {
        type: 'coral-panel',
      },
    ],
  },
};

console.log(testStructure);

const mapStateToProps = () => ({
  formDom: structureToDom(testStructure),
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps);
