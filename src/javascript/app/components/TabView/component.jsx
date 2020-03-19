import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';
import TabPanel from './TabPanel';

const TabView = ({ tabs, id }) => (
  <coral-tabview>
    <coral-tablist target={`#${id}`}>
      { tabs.map((tab) => <Tab {...tab} key={tab.id} />) }
    </coral-tablist>
    <coral-panelstack id={id}>
      { tabs.map((tab) => <TabPanel {...tab} key={tab.id} />) }
    </coral-panelstack>
  </coral-tabview>
);

TabView.propTypes = {
  id: PropTypes.string.isRequired,
  tabs: PropTypes.array.isRequired,
};

TabView.defaultProps = {};

export default TabView;
