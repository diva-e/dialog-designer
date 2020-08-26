import { connect } from 'react-redux';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  downloadXML: () => {
    dispatch({
      type: 'DOWNLOAD_XML',
    });
  },
  downloadJSON: () => {
    dispatch({
      type: 'DOWNLOAD_JSON',
    });
  },
  downloadACGJSON: () => {
    dispatch({
      type: 'DOWNLOAD_ACG_JSON',
    });
  },
  executeCompleteReset: () => {
    dispatch({
      type: 'EXECUTE_COMPLETE_RESET',
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps);
