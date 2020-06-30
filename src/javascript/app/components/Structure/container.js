import { connect } from 'react-redux';
import structureToXML from '../../../tools/structureToXML';

const mapStateToProps = (state) => ({
  structure: state.structure,
  xmlOutput: new XMLSerializer().serializeToString(structureToXML(state.structure).documentElement),
});

const mapDispatchToProps = (dispatch) => ({
  updateStructure: (structure) => {
    dispatch({
      type: 'SET_STRUCTURE',
      payload: structure,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps);
