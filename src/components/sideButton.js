import React from 'react';
import '../App.css';

const SideButton = props => {
  const { action, disabled, text } = props;
  const disabledClass = disabled ? 'side-option-disabled' : '';
  return (
    <div onClick={disabled ? null : action} className={'side-option ' + disabledClass}>
      <span>{text}</span>
    </div>
  );
};

export default SideButton;
