import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const Footer = ({
  executeCompleteReset,
  downloadXML,
  downloadJSON,
  uploadJSON,
  downloadACGJSON,
}) => {

  const fileInput = useRef(null);

  const triggerInputFile = () => fileInput.current.click();

  return (
    <div className="footer coral--light">
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
          title="Download ACG JSON"
          size="M"
          type="button"
          onClick={() => downloadACGJSON()}
        >
          <coral-icon
            icon="download"
            size="S"
          />
          <coral-button-label className="_coral-Button-label">Download ACG JSON</coral-button-label>
        </button>
        <hr className="separator--vertical" />
        <button
          icon=""
          variant="secondary"
          className="_coral-Button _coral-Button--secondary"
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
        <div
          variant="secondary"
          className="_coral-Button _coral-Button--secondary _hidden-file-input-wrapper"
          onClick={triggerInputFile}
          onKeyDown={triggerInputFile}
          role="button"
          tabIndex="0"
        >
          <input
            icon=""
            title="Upload JSON"
            className="_hidden-file-button"
            size="M"
            type="file"
            onChange={(event) => uploadJSON(event)}
            ref={fileInput}
          />
          <coral-icon
            icon="upload"
            size="S"
          />
          <coral-button-label className="_coral-Button-label">Upload JSON</coral-button-label>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  downloadXML: PropTypes.func.isRequired,
  downloadJSON: PropTypes.func.isRequired,
  uploadJSON: PropTypes.func.isRequired,
  downloadACGJSON: PropTypes.func.isRequired,
  executeCompleteReset: PropTypes.func.isRequired,
};

export default Footer;
