import { getCleanCharacters, getCleanPlanets, getCleanVehicles } from './helper';

class Api {
  constructor(url) {
    this.data = this.getApiData(url);
  };

  fetchApiData = (url) => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        switch (url) {
          case 'https://swapi.co/api/people/':
            const peopleData = getCleanCharacters(data);
            const fetchedCharacterInfo = this.fetchHomeworlds(peopleData);
            return fetchedCharacterInfo;
          break;
          case 'https://swapi.co/api/planets/':
            const planetsData = getCleanPlanets(data);
            const fetchedPlanetInfo = this.fetchResidents(planetsData);
            return fetchedPlanetInfo;
          break;
          case 'https://swapi.co/api/vehicles/':
            const vehicleData = getCleanVehicles(data)
            return vehicleData;
          break;
        }
      })
      .then(data => {
        this.data = data;
      })
  }

  fetchedCharacterInfo = (characters) => {
    const unresolvedPromises = characters.map(person => {
      return (
        fetch(person.homeworld)
        .then(res => res.json())
        .then(data => ({
          ...person,
          homeworld: data.name,
          homeworldPopulation: data.population
        }))
      )
    })

    return Promise.all(unresolvedPromises)
  }

  fetchedPlanetInfo = (planets) => {
    const planetData = planets.map(planet => {
      const unresolvedPromises = planet.residents.map(resident => {
        return (fetch(resident)
          .then(res => res.json())
        )
      })
      const resolvedPromised = Promise.all(unresolvedPromises);
      return {
        ...planets,
        residents: resolvedPromised
      }
    })
    return planetData;
  }

}

export default Api;