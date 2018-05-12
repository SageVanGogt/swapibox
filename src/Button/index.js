import React from 'react';
import './index.css';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { section, handleClickEvent, handleFavorite, name, favoriteCount, favorited } = props;
  const clickFunction = section === 'favorite' ? handleFavorite : handleClickEvent;
  const favoriteState = favorited && 'favorite-active'
  const classNameVar = `${section}-button ${favoriteState}`;
  return (
    <div className='button'>
      <button name={section} onClick={clickFunction} value={name} className={classNameVar}>
        {section}
        {
          favoriteCount && favoriteCount
        }
      </button>
    </div>
  );
}

Button.propTypes = {
  handleClickEvent: PropTypes.func,
  section: PropTypes.string
}

export default Button;