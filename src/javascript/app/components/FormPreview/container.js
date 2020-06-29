import { connect } from 'react-redux';
import structureToDom from '../../../tools/structureToDom';

const testStructure = {
  type: 'coral-tabview',
  properties: {
    id: 'testview',
  },
  children: {
    tabs: [
      {
        type: 'coral-tab',
        properties: {
          label: 'Tab 1',
          id: 'tab1',
        },
      },
      {
        type: 'coral-tab',
        properties: {
          label: 'Tab 2',
          id: 'tab2',
        },
      },
    ],
    panels: [
      {
        type: 'coral-panel',
        properties: {
          heading: 'Tab 1 with a title',
          id: 'tab1',
        },
      },
      {
        type: 'coral-panel',
        properties: {
          heading: 'Tab 2 with a title',
          id: 'tab2',
        },
      },
    ],
  },
};

const mapStateToProps = () => ({
  formDom: structureToDom(testStructure),
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps);
