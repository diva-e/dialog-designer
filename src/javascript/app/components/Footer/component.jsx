import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({
  executeCompleteReset,
  downloadXML,
  downloadJSON,
  downloadACGJSON,
}) => (
  <div className="footer">
    <div className="footer_left">
      <button
        type="button"
        icon=""
        variant="warning"
        className="_coral-Button _coral-Button--warning"
        title="Complete Reset"
        size="M"
        onClick={() => executeCompleteReset()}
      >
        <coral-icon
          icon="delete"
          size="S"
        />
        <coral-button-label className="_coral-Button-label">Complete Reset</coral-button-label>
      </button>
    </div>
    <div className="footer_right">
      <button
        icon=""
        variant="cta"
        className="_coral-Button _coral-Button--cta"
        title="Download XML"
        size="M"
        type="button"
        onClick={() => downloadXML()}
      >
        <coral-icon
          icon="download"
          size="S"
        />
        <coral-button-label className="_coral-Button-label">Download XML</coral-button-label>
      </button>
      <button
        icon=""
        variant="cta"
        className="_coral-Button _coral-Button--cta"
        title="Download JSON"
        size="M"
        type="button"
        onClick={() => downloadJSON()}
      >
        <coral-icon
          icon="download"
          size="S"
        />
        <coral-button-label className="_coral-Button-label">Download JSON</coral-button-label>
      </button>
      <button
        icon=""
        variant="cta"
        className="_coral-Button _coral-Button--cta"
        title="Download AGC JSON"
        size="M"
        type="button"
        onClick={() => downloadACGJSON()}
      >
        <coral-icon
          icon="download"
          size="S"
        />
        <coral-button-label className="_coral-Button-label">Download AGC JSON</coral-button-label>
      </button>
    </div>
  </div>
);

Footer.propTypes = {
  downloadXML: PropTypes.func.isRequired,
  downloadJSON: PropTypes.func.isRequired,
  downloadACGJSON: PropTypes.func.isRequired,
  executeCompleteReset: PropTypes.func.isRequired,
};

export default Footer;
