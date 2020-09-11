import { connect } from 'react-redux';
import fieldValidation from '../../../tools/fieldValidation';
import actionNames from '../../store/actionNames';

const mapStateToProps = (state) => ({
  component: state.editComponent,
  fields: state.editComponent && state.editComponent.fields ? fieldValidation(state.editComponent.fields) : null,
});

const mapDispatchToProps = (dispatch) => ({
  updateFieldValue: (field, value) => {
    dispatch({
      type: actionNames.UI.EDITCOMPONENT.UPDATE_FIELDVALUE,
      payload: {
        field,
        value,
      },
    });
  },
  saveEdit: () => {
    dispatch({
      type: actionNames.UI.EDITCOMPONENT.SAVE,
    });
  },
  closeEdit: () => {
    dispatch({
      type: actionNames.UI.EDITCOMPONENT.CLOSE,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps);
