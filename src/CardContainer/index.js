import React from 'react';
import PropTypes from 'prop-types';
import Card from './../Card/index';

const CardContainer = (props) => {
  const allCards = props.currentSectionData.map((data, i) => {
    return (
      <Card 
        key={`card${i}`}
        {...data}
        handleFavorite={props.handleFavorite}
      />
    );
  })
  return (
    <div className="card-container">
      {allCards}
    </div>
  );
}

CardContainer.propTypes = {
  currentSectionData: PropTypes.array.isRequired
}

export default CardContainer