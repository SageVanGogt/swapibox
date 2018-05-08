import { getCleanCharacters, getCleanPlanets, getCleanVehicles } from './helper';

class Api {
  constructor(url) {
    this.subject = this.fetchApiData(url);
  };

  fetchApiData = (url) => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        switch (url) {
          case 'https://swapi.co/api/people/':
            const peopleData = getCleanCharacters(data);
            this.subject = this.fetchCharacterInfo(peopleData);
          break;
          case 'https://swapi.co/api/planets/':
            const planetsData = getCleanPlanets(data);
            this.subject = this.fetchResidents(planetsData);
          break;
          case 'https://swapi.co/api/vehicles/':
            this.subject = getCleanVehicles(data);
          break;
          default: 
            console.log('nope')
          break;
        }
      })   
  }

  fetchCharacterInfo(characters) {
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