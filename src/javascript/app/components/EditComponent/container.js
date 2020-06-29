import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  component: state.editComponent,
  fields: state.editComponent && state.editComponent.fields ? state.editComponent.fields : null,
});

const mapDispatchToProps = (dispatch) => ({
  updateFieldValue: (field, value) => {
    dispatch({
      type: 'UPDATE_EDIT_FIELD_VALUE',
      payload: {
        field,
        value,
      },
    });
  },
  saveEdit: () => {
    dispatch({
      type: 'SAVE_EDIT_COMPONENT',
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps);
