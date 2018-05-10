import React from 'react';
// import './index.css';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { section, handleClickEvent, handleFavorite, name } = props
  const clickFunction = section === 'favorite' ? handleFavorite : handleClickEvent
  return (
    <div className='button'>
      <button name={section} onClick={clickFunction} value={name}>
        {section}
      </button>
    </div>
  );
}

Button.propTypes = {
  handleClickEvent: PropTypes.func,
  section: PropTypes.string
}

export default Button;