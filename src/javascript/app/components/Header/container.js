import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  previewTheme: state.settings.previewTheme,
});

const mapDispatchToProps = (dispatch) => ({
  updatePreviewTheme: (previewTheme) => {
    dispatch({
      type: 'UPDATE_PREVIEW_THEME',
      payload: {
        previewTheme,
      },
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps);
