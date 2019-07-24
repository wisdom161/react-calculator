import React from 'react';
import '../styles/ClearButton.css';

const Clear = (props) => (
  <div className="clear-btn" onClick={props.handleClear}>
    {props.children}
  </div>
)

export default Clear;