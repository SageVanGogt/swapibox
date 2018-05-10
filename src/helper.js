const getRandomFilm = (filmData) => {
  const ranIndex = findRanIndex(filmData.count);
  const ranFilm = filmData.results[ranIndex];
  const openingCrawl = ranFilm.opening_crawl;
  const title = ranFilm.title;
  const releaseYear = ranFilm.release_date.slice(0, 4);

  return ({
    openingCrawl,
    title,
    releaseYear
  });
}

const findRanIndex = (filmCount) => {
  const number = Math.floor(Math.random(1) * 7);
  return number;
}

const getCleanCharacters = (people) => {
  const allPeople = people.results;
  const formattedCharacters = allPeople.map(person => {
    return ({
      name: person.name,
      species: person.species,
      homeworld: person.homeworld,
      homeworldPopulation: 'homeworld population'
    });
  });
  return formattedCharacters;
}

const getCleanPlanets = (planets) => {
  const allPlanets = planets.results;
  const formattedPlanets = allPlanets.map(planet => {
    return ({
      name: planet.name,
      terrain: planet.terrain,
      population: planet.population,
      climate: planet.climate,
      residents: planet.residents
    });
  });

  return formattedPlanets;
}

const getCleanVehicles = (vehicles) => {
  const allVehicles = vehicles.results;
  const formattedVehicles = allVehicles.map(vehicle => {
    return ({
      name: vehicle.name, 
      model: vehicle.model,
      vehicleClass: vehicle.vehicle_class, 
      passengerCount: vehicle.passengers
    });
  });
  return formattedVehicles
}

export { 
          getRandomFilm, 
          getCleanCharacters, 
          getCleanPlanets,
          getCleanVehicles 
        };