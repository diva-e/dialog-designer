import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  previewTheme: state.settings.previewTheme,
});

const mapDispatchToProps = (dispatch) => ({
  updatePreviewTheme: () => {
    dispatch({
      type: 'UPDATE_PREVIEW_THEME',
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps);
