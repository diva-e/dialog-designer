import React from 'react';

// todo: outsource style to css
const Header = () => (
  <div className="header">
    <h1>AEM Dialog Creator</h1>
    {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
    <button
      is="coral-button"
      variant="minimal"
      icon="colorPalette"
      iconsize="M"
      type="button"
      title="Toggle Dialog Theme"
      style={{ position: 'absolute', right: '-5px', top: '3px', color: 'white' }}
      onClick={() => {
        // actually dispatch an action to store it
        document.body.classList.toggle('coral--dark');
        document.body.classList.toggle('coral--light');
      }}
    />
  </div>
);

export default Header;
