import { getCleanCharacters, getCleanPlanets, getCleanVehicles } from './helper';

const fetchApiData = async (url) => {
  let final = []
  const response = await fetch(url)
  const data = await response.json()
  switch (url) {
    case 'https://swapi.co/api/people/':
      const peopleData = getCleanCharacters(data);
      final = await fetchCharacterInfo(peopleData);
    break;
    case 'https://swapi.co/api/planets/':
      const planetsData = getCleanPlanets(data);
      final = await fetchPlanetInfo(planetsData);
    break;
    case 'https://swapi.co/api/vehicles/':
      final = getCleanVehicles(data)
    break;
    default: 
      console.log('nope')
    break;
  }  
  return final
}

const fetchCharacterInfo = (characters) => {
  const unresolvedPromises = characters.map(async person => {
    const response1 = await fetch(person.species[0]);
    const species = await response1.json();
    const response2 = await fetch(person.homeworld);
    const homeworld = await response2.json();
    return ({
      ...person,
      homeworld: homeworld.name,
      homeworldPopulation: homeworld.population, 
      species: species.name
    })
  })

  return Promise.all(unresolvedPromises)
}

const fetchPlanetInfo = (planets) => {
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
}

export default fetchApiData;