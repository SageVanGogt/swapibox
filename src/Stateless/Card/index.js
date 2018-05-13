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
    passengerCount,
    favorited,
    handleFavorite
  } = props;
  const planetCard = residents ? (
    <div className="card planet-card">
      <Button 
        section={'favorite'}
        handleFavorite={handleFavorite}
        name={name}
        favorited={favorited}
      />
      <h2><span className='card-key'>name:</span> {name}</h2>
      <h3><span className='card-key'>terrain: </span>{terrain}</h3>
      <h4><span className='card-key'>population: </span>{population}</h4>
      <h5><span className='card-key'>climate: </span>{climate}</h5>
      <h4><span className='card-key'>residents: </span>{residents}</h4>
    </div>
  ) : null;
  const vehicleCard = vehicleClass ? (
    <div className="card vehicle-card">
      <Button 
        section={'favorite'}
        handleFavorite={props.handleFavorite}
        name={name}
        favorited={favorited}
      />
      <h2><span className='card-key'>name: </span>{name}</h2>
      <h3><span className='card-key'>model: </span>{model}</h3>
      <h4><span className='card-key'>class: </span>{vehicleClass}</h4>
      <h5><span className='card-key'>passengers: </span>{passengerCount}</h5>
    </div>
  ) : null;
  const personCard = homeworld ? (
    <div className="card person-card">
      <Button section={'favorite'}
        handleFavorite={props.handleFavorite}
        name={name}
        favorited={favorited}
      />
      <h2><span className='card-key'>name: </span>{name}</h2>
      <h3><span className='card-key'>species: </span>{species}</h3>
      <h4><span className='card-key'>homeworld: </span>{homeworld}</h4>
      <h5><span className='card-key'>homeworld population: </span>{homeworldPopulation}</h5>
    </div>
  ): null; 

  return (
    <div className="category-card">
      {vehicleCard}
      {personCard}
      {planetCard}
    </div>
  );
};

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
  passengerCount: PropTypes.string,
  favorited: PropTypes.bool
};

export default Card;