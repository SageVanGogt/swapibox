import React from 'react';
import PropTypes from 'prop-types';

const Film = (props) => {
  const { openingCrawl, title, releaseYear } = props.currentRandomFilm;
  return (
    <div className="film-container">
      <p>{openingCrawl}</p>
      <h2>{title}</h2>
      <h4>{releaseYear}</h4>
    </div>
  );
}

Film.propTypes = {
  currentRandomFilm: PropTypes.object.isRequired
};

export default Film;