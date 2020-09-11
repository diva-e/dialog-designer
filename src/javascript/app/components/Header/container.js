import { connect } from 'react-redux';
import actionNames from '../../store/actionNames';

const togglePreviewTheme = () => {
  // todo: move to correct position maybe in /tools ???
  document.body.classList.toggle('coral--dark');
  document.body.classList.toggle('coral--light');
  return document.body.classList.contains('coral--dark') ? 'coral--dark' : 'coral--light';
};

const mapStateToProps = (state) => ({
  previewTheme: state.settings.previewTheme,
});

const mapDispatchToProps = (dispatch) => ({
  updatePreviewTheme: () => {
    dispatch({
      type: actionNames.UI.PREVIEW.UPDATE_THEME,
      payload: {
        previewTheme: togglePreviewTheme(),
      },
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps);
