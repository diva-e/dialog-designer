import React from 'react';
import Tabview from '../TabView';

const App = () => (
  <Tabview
    {...{
      id: 'tabview1',
      tabs: [
        {
          id: 'tab1',
          label: 'Tab 1',
          heading: 'Tab 1 Headline',
          content: [],
        },
        {
          id: 'tab2',
          label: 'Tab 2',
          heading: 'Tab 2 Headline',
          content: [],
        },
      ],
    }}
  />
);

// App.propTypes = {
//   example: PropTypes.bool.isRequired,
//   toggleExample: PropTypes.func.isRequired,
// };
//
// App.defaultProps = {
// };

export default App;
