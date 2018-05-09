import React from 'react';
// import './index.css';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { section, handleClickEvent } = props
  return (
    <div className='button'>
      <button name={section} onClick={handleClickEvent}>
        {section}
      </button>
    </div>
  );
}

Button.propTypes = {
  handleClickEvent: PropTypes.func.isRequired,
  section: PropTypes.string.isRequired
}

export default Button;