import { 
  getCleanCharacters, 
  getCleanPlanets, 
  getCleanVehicles } from './../helper';

const fetchApiData = async (name) => {
  try {
    const url = `https://swapi.co/api/${name}/`;
    const response = await fetch(url);
    const data = await response.json();
    switch (name) {
      case 'people':
        const peopleData = getCleanCharacters(data);
        return await fetchCharacterInfo(peopleData);
      case 'planets':
        const planetsData = getCleanPlanets(data);
        return  await fetchPlanetInfo(planetsData);
      case 'vehicles':
        return await getCleanVehicles(data);
      default: 
        'get a job';
        break;
    }
  } catch (er) {
    let error = 'fetch failed';
    throw error;
  }
};

const fetchFilm = async () => {
  try {
    const url = 'https://swapi.co/api/films/';
    const response = await fetch(url);
    const films = await response.json();
    return films;
  } catch (er) {
    let error = 'Error grabbing film';
    throw error;
  }
};

const fetchCharacterInfo = (characters) => {
  const unresolvedPromises = characters.map(async person => {
    const species = await fetchSpeciesInfo(person.species[0]);
    const homeworld = await fetchHomeworld(person.homeworld);
    return ({
      ...person,
      homeworld: homeworld.name,
      homeworldPopulation: homeworld.population, 
      species: species.name
    });
  });
  return Promise.all(unresolvedPromises);
};

const fetchSpeciesInfo = async (endpoint) => {
  try {  
    const response = await fetch(endpoint);
    const species = await response.json();
    return species;
  } catch (er) {
    let error = 'Fetch for species failed';
    throw error;
  }
};

const fetchHomeworld = async (endpoint) => {
  try {
    const response = await fetch(endpoint);
    const homeworld = await response.json();
    return homeworld;
  } catch (er) {
    let error = 'Fetch for homeworld failed';
    throw error;
  }
};

const fetchPlanetInfo = (planets) => {
  try {
    const planetData = planets.map(async planet => {
      const unresolvedPromises = await planet.residents.map(async res => {
        const resident = await fetchResident(res);
        return resident.name;
      });
      const resolvedPromises = await Promise.all(unresolvedPromises);
      return {
        ...planet,
        residents: resolvedPromises
      };
    });
    return Promise.all(planetData);
  } catch (er) {
    let error = new Error('fetch failed');
    throw error;
  }
};

const fetchResident = async (res) => {
  try {
    const response = await fetch(res);
    const resident = await response.json();
    return resident;
  } catch (er) {
    let error = 'Failed to fetch resident';
    throw error;
  }
};

export {
  fetchApiData,
  fetchFilm,
  fetchCharacterInfo,
  fetchHomeworld,
  fetchPlanetInfo,
  fetchResident,
  fetchSpeciesInfo
};