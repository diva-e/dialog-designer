import { connect } from 'react-redux';
import structureToXML from '../../../tools/structureToXML';

const mapStateToProps = (state) => {
  let xmlOutput;

  try {
    xmlOutput = new XMLSerializer().serializeToString(structureToXML(state.structure).documentElement);
  } catch (error) {
    xmlOutput = error.message;
  }

  return ({
    structure: state.structure,
    xmlOutput,
  });
};

const mapDispatchToProps = (dispatch) => ({
  updateStructure: (structure) => {
    dispatch({
      type: 'SET_STRUCTURE',
      payload: structure,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps);
