import React from 'react';
import PropTypes from 'prop-types';

const App = (props) => (
  <>
    <coral-tabview>
      <coral-tablist target="#id_1">
        <coral-tab id="id_2">
          <coral-tab-label>
            Tab 1 Label
          </coral-tab-label>
        </coral-tab>
        <coral-tab id="id_3">
          <coral-tab-label>
            Tab 2 Label
          </coral-tab-label>
        </coral-tab>
      </coral-tablist>
      <coral-panelstack id="id_1">
        <coral-panel aria-labelledby="id_2">
          <coral-panel-content>
            <div className="foundation-layout-util-vmargin">
              <div className="coral-FixedColumn foundation-layout-util-vmargin">
                <div className="coral-FixedColumn-column">
                  <h4 className="coral-Heading coral-Heading--4">Panel 1</h4>
                  <div className="coral-Well">
                    <button
                      type="button"
                      className="coral-Button coral-Button--secondary"
                      onClick={props.toggleExample}
                    >
                      { props.example ? 'true' : 'false' }
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </coral-panel-content>
        </coral-panel>
        <coral-panel aria-labelledby="id_3">
          <coral-panel-content>
            <div className="foundation-layout-util-vmargin">
              <div className="coral-FixedColumn foundation-layout-util-vmargin">
                <div className="coral-FixedColumn-column">
                  <h4 className="coral-Heading coral-Heading--4">Panel 2</h4>
                  <div className="coral-Well">
                    <coral-alert>
                      <coral-alert-content>
                        { props.example ? 'true' : 'false' }
                      </coral-alert-content>
                    </coral-alert>
                  </div>
                </div>
              </div>
            </div>
          </coral-panel-content>
        </coral-panel>
      </coral-panelstack>
    </coral-tabview>
  </>
);

App.propTypes = {
  example: PropTypes.bool.isRequired,
  toggleExample: PropTypes.func.isRequired,
};

App.defaultProps = {
};

export default App;
