import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Film = (props) => {
  const { openingCrawl, title, releaseYear } = props.currentRandomFilm;
  return (
    <div className="film-container">
      <img src="/assets/starwarstv.png" alt="tv" className="tv-image" />
      <div className="scrolling-text">
        <p>{openingCrawl}</p>
      </div>
      <h2 className="title">{title}</h2>
      <h4 className="year">{releaseYear}</h4>
    </div>
  );
}

Film.propTypes = {
  currentRandomFilm: PropTypes.object.isRequired
};

export default Film;