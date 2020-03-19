import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ id, label }) => (
  <coral-tab id={id}>
    <coral-tab-label>
      {label}
    </coral-tab-label>
  </coral-tab>
);


Tab.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Tab;
