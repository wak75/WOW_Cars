import React from 'react';

import './custom-buttom.styles.scss';

const CustomButton = ({children,isGoogleSignIn,inverted,...allotherProps}) => (
  <button
    className={`${inverted ? 'inverted' : ''} ${
      isGoogleSignIn ? 'google-sign-in' : ''
    } custom-button`}
    {...allotherProps}
  >
    {children}
  </button>
)

export default CustomButton

