import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
  const { 
          name, 
          species, 
          homeworld, 
          homeworldPopulation, 
          terrain, 
          climate, 
          population, 
          residents,
          model, 
          class, 
          passengerCount
        } = props;
  const planetCard = (
    <div className="planet-card">
      <h2>{name}</h2>
      <h3>{terrain}</h3>
      <h4>{population}</h4>
      <h5>{climate}</h5>
      <h4>{residents}</h4>
    </div>
  );
  const vehicleCard = (
    <div className="vehicle-card">
      <h2>{name}</h2>
      <h3>{model}</h3>
      <h4>{class}</h4>
      <h5>{passengerCount}</h5>
    </div>
  );
  const personCard = (
    <div className="person-card">
      <h2>{name}</h2>
      <h3>{species}</h3>
      <h4>{homeworld}</h4>
      <h5>{homeworldPopulation}</h5>
    </div>
  );


  return(
    <div className="category-card">
      {}
    </div>
  );
}

Card.propTypes = {

}

export default Card;