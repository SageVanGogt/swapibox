import { getCleanCharacters, getCleanPlanets, getCleanVehicles } from './helper';

const fetchApiData = async (name) => {
  let final;
  const url = `https://swapi.co/api/${name}/`
  const response = await fetch(url);
  const data = await response.json();
  switch (name) {
    case 'people':
      const peopleData = getCleanCharacters(data);
      final = await fetchCharacterInfo(peopleData);
      break;
    case 'planets':
      const planetsData = getCleanPlanets(data);
      final = await fetchPlanetInfo(planetsData);
      break;
    case 'vehicles':
      final = await getCleanVehicles(data);
      break;
    default: 
      final = [];
      break;
  }  

  return final
}

const fetchCharacterInfo = (characters) => {
  try {
    const unresolvedPromises = characters.map(async person => {
      const species = await fetchSpeciesInfo(person.species[0]);
      const homeworld = await fetchHomeworld(person.homeworld);
      return ({
        ...person,
        homeworld: homeworld.name,
        homeworldPopulation: homeworld.population, 
        species: species.name
      })
    })
    return Promise.all(unresolvedPromises)
  } catch(er) {
    const error = new Error('fetch failed');
    return error;
  }
}

const fetchSpeciesInfo = async (endpoint) => {
  const response = await fetch(endpoint);
  const species = await response.json();
  return species;
}

const fetchHomeworld = async (endpoint) => {
  const response = await fetch(endpoint);
  const homeworld = await response.json();
  return homeworld;
}

const fetchPlanetInfo = (planets) => {
  try {
    const planetData = planets.map(async planet => {
      const unresolvedPromises = await planet.residents.map(async resident => {
        const response = await fetch(resident);
        const residentToText = await response.json();
        return residentToText.name;
      })
      const resolvedPromises = await Promise.all(unresolvedPromises);
      return {
        ...planet,
        residents: resolvedPromises
      };
    });

  return Promise.all(planetData);
  } catch(er) {
    const error = new Error('fetch failed');
    return error;
  }
}

export default fetchApiData;