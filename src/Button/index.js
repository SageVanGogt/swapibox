import React from 'react';
// import './index.css';

const Button = (props) => {
  return (
    <div className='button'>
      <button name={props.section}>
        {props.section}
      </button>
    </div>
  );
}

export default Button;