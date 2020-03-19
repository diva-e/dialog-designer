import React from 'react';
import PropTypes from 'prop-types';
import DropTarget from '../DropTarget';

const TabPanel = ({ id, heading }) => (
  <coral-panel aria-labelledby={id}>
    <coral-panel-content>
      <div className="foundation-layout-util-vmargin">
        <div className="coral-FixedColumn foundation-layout-util-vmargin">
          <div className="coral-FixedColumn-column">
            <h4 className="coral-Heading coral-Heading--4">{heading}</h4>
            <div className="coral-Well">
              <DropTarget />
            </div>
          </div>
        </div>
      </div>
    </coral-panel-content>
  </coral-panel>
);


TabPanel.propTypes = {
  id: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
};

export default TabPanel;
