import { connect } from 'react-redux';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  openContentMenu: (path, x, y) => {
    dispatch({
      type: 'OPEN_CONTEXTMENU',
      path,
      x,
      y,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps);
