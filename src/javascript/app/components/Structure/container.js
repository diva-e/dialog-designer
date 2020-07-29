import { connect } from 'react-redux';
import structureToXML from '../../../tools/structureToXML';
import XMLFormat from '../../../tools/XMLFormat';

const mapStateToProps = (state) => ({
  structure: state.structure,
  xmlOutput: XMLFormat(structureToXML(state.structure).documentElement),
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
