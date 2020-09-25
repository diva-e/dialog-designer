import { connect } from 'react-redux';
import structureToXML from '../../../../tools/structureToXML';
import XMLFormat from '../../../../tools/XMLFormat';
import actionNames from '../../../store/actionNames';

const mapStateToProps = (state) => ({
  structure: state.structure,
  xmlOutput: XMLFormat(structureToXML(state.structure).documentElement),
  xmlZoom: state.settings.xmlZoom || 3,
});

const mapDispatchToProps = (dispatch) => ({
  updateXmlZoom: (xmlZoom) => {
    dispatch({
      type: actionNames.UI.ACTION_PANEL.UPDATE_XML_ZOOM,
      xmlZoom,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps);
