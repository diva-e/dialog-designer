import { connect } from 'react-redux';
import structureToXML from '../../../../tools/structureToXML';
import XMLFormat from '../../../../tools/XMLFormat';
import actionNames from '../../../store/actionNames';

const mapStateToProps = (state) => ({
  structure: state.structure,
  xmlOutput: XMLFormat(structureToXML(state.structure).documentElement),
});

const mapDispatchToProps = (dispatch) => ({
  updateStructure: (structure) => {
    dispatch({
      type: actionNames.STRUCTURE.SET,
      payload: structure,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps);
