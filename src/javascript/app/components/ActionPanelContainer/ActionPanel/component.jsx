import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'class-names';

class ActionPanel extends React.Component {
  constructor(props) {
    super(props);
    // todo: convert to non class version / remove ref
    this.ref = React.createRef();
  }

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
          className={
            classNames('action-panel__content-opener', {
              'action-panel__content-opener--active': isActive,
            })
          }
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
            <h3>{title}</h3>
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
