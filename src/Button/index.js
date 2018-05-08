import React from 'react';
// import './index.css';

const Button = (props) => {
  const { section, handleClickEvent } = props
  return (
    <div className='button'>
      <button name={section} onClick={(event) => handleClickEvent(event)}>
        {section}
      </button>
    </div>
  );
}

export default Button;