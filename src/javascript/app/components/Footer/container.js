import { connect } from 'react-redux';
import actionNames from '../../store/actionNames';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  downloadXML: () => {
    dispatch({
      type: actionNames.STRUCTURE.DOWNLOAD.XML,
    });
  },
  downloadJSON: () => {
  
    dispatch({
      type: actionNames.STRUCTURE.DOWNLOAD.JSON,
    });
  },
  uploadJSON: (event) => {
    const fileReader = new FileReader();
    fileReader.readAsText(event.target.files[0], 'UTF-8');
    fileReader.onload = (loadedEvent) => {
      dispatch({
        type: actionNames.STRUCTURE.SET,
        payload: JSON.parse(loadedEvent.target.result),
      });
    };
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
