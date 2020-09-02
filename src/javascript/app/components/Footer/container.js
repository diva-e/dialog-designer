import { connect } from 'react-redux';
import actionNames from '../../store/actionNames';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  downloadXML: () => {
    dispatch({
      type: actionNames.STRUCTURE.XML,
    });
  },
  downloadJSON: () => {
    dispatch({
      type: actionNames.STRUCTURE.DOWNLOAD.JSON,
    });
  },
  downloadACGJSON: () => {
    dispatch({
      type: actionNames.STRUCTURE.DOWNLOAD.ACG_JSON,
    });
  },
  executeCompleteReset: () => {
    dispatch({
      type: actionNames.STRUCTURE.RESET,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps);
