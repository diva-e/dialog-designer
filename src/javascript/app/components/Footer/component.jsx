import React from 'react';

const Footer = ({ executeCompleteReset, downloadXML, downloadJSON }) => (
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
        type="submit"
        onClick={() => downloadXML()}
      >
        <coral-button-label className="_coral-Button-label">Download XML</coral-button-label>
      </button>
      <button
        icon=""
        variant="cta"
        className="_coral-Button _coral-Button--cta"
        title="Download JSON"
        size="M"
        type="submit"
        onClick={() => downloadJSON()}
      >
        <coral-button-label className="_coral-Button-label">Download JSON</coral-button-label>
      </button>
    </div>
  </div>
);

export default Footer;
