import React from 'react';
import PropTypes from 'prop-types';
import Button from './../Button/index';
import './index.css';

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
          vehicleClass, 
          passengerCount
        } = props;
  const planetCard = residents ? (
    <div className="card planet-card">
      <Button 
        section={'favorite'}
        handleFavorite={props.handleFavorite}
        name={name}
      />
      <h2>{name}</h2>
      <h3>{terrain}</h3>
      <h4>{population}</h4>
      <h5>{climate}</h5>
      <h4>{residents}</h4>
    </div>
  ) : null;
  const vehicleCard = vehicleClass ? (
    <div className="card vehicle-card">
      <Button 
        section={'favorite'}
        handleFavorite={props.handleFavorite}
        name={name}
      />
      <h2>{name}</h2>
      <h3>{model}</h3>
      <h4>{vehicleClass}</h4>
      <h5>{passengerCount}</h5>
    </div>
  ) : null;
  const personCard = homeworld ? (
    <div className="card person-card">
      <Button section={'favorite'}
        handleFavorite={props.handleFavorite}
        name={name}
      />
      <h2>{name}</h2>
      <h3>{species}</h3>
      <h4>{homeworld}</h4>
      <h5>{homeworldPopulation}</h5>
    </div>
  ): null; 


  return(
    <div className="category-card">
      {vehicleCard}
      {personCard}
      {planetCard}
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  species: PropTypes.string,
  homeworld: PropTypes.string,
  homeworldPopulation: PropTypes.string,
  terrain: PropTypes.string,
  climate: PropTypes.string,
  population: PropTypes.string,
  residents: PropTypes.array,
  model: PropTypes.string,
  vehicleClass: PropTypes.string,
  passengerCount: PropTypes.string
}

export default Card;