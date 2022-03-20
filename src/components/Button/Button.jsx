import React from 'react';
import './Button.css';
const Button = (props) => {
  return (
    <button type='button' className='button'>
      {props.title}
    </button>
  );
};

export default Button;
