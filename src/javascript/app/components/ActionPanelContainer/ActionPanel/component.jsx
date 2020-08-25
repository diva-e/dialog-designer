import React from 'react';
import PropTypes from 'prop-types';

class ActionPanel extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    // this.openPanel = this.openPanel.bind(this);
  }

  // openPanel() {
  //   console.log('opened');
  //   this.props.isActive = true;
  // }

  render() {
    const {
      title,
      children,
      isActive,
      icon,
      activate,
    } = this.props;
    return (
      <>
        <button
          className="action-panel__content-opener"
          onClick={activate}
          type="button"
        >
          { icon ? (
            <coral-icon
              icon={icon}
              size="S"
            />
          ) : null }
          <span>{title}</span>
        </button>
        { isActive ? (
          <div className="action-panel">
            {children}
          </div>
        ) : null }
      </>
    );
  }
}

ActionPanel.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  isActive: PropTypes.bool.isRequired,
  icon: PropTypes.string,
  activate: PropTypes.func.isRequired,
};

ActionPanel.defaultProps = {
  children: null,
  icon: null,
};

export default ActionPanel;
