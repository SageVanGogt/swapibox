
import { fetchApiData, fetchFilm, fetchCharacterInfo, fetchHomeworld, fetchPlanetInfo, fetchResident, fetchSpeciesInfo } from './api';
import people from './../mockData/mockPeople';
import vehicles from './../mockData/mockVehicles';
import planets from './../mockData/mockPlanets';
import films from './../mockData/mockFilms';
import { cleanPeople } from './../mockData/cleanPeople';

describe('API calls', () => {
  describe('fetchApiData', () => {
    const mockPeople = people;
    const mockCleanPeople = cleanPeople;

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockPeople)
      }));
    });

    it('should be called with the correct params', async () => {
      const expected = 'https://swapi.co/api/people/';

      await fetchApiData('people');
      expect(window.fetch).toHaveBeenCalledWith(expected);
    });

    it('returns an object if status code is ok', async () => {
      await expect(fetchApiData('people')).resolves.toEqual(mockCleanPeople);
    });

    it('throws an error if status code is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500
      }));
  
      await expect(fetchApiData()).rejects.toEqual('fetch failed');
    });
  });
  
  describe('fetchFilm', () => {
    const mockFilms = films;

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockFilms)
      }));
    });

    it('should be called with the correct params', async () => {
      const expected = 'https://swapi.co/api/films/';

      await fetchFilm();
      expect(window.fetch).toHaveBeenCalledWith(expected);
    });

    it('returns an object if status code is ok', async () => {
      await expect(fetchFilm()).resolves.toEqual(mockFilms);
    });

    it('throws an error if status code is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500
      }));
  
      await expect(fetchFilm()).rejects.toEqual('Error grabbing film');
    });
  });

  describe.skip('fetchCharacterInfo', () => {
    const mockPeople = people;
    const mockCleanPeople = cleanPeople;
    
    // beforeEach(() => {
    //   window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    //     status: 200,
    //     json: () => Promise.resolve(mockPeople),
    //   }))
    // })

    it('should call fetchSpecies info with the correct params', async () => {
      const spy =  jest.spyOn('fetchSpeciesInfo'); 
      // const fetchSpeciesInfo = jest.fn();
      const mockSpecies = 'https://swapi.co/api/species/1/';
      const mockPerson = mockCleanPeople.species[0];
      console.log(mockPerson)
      await fetchCharacterInfo(mockPerson);
      await expect(fetchSpeciesInfo).toHaveBeenCalledWith(mockSpecies);
    });

    it('should call fetchHomeworld info with the correct params', async () => {
      const spy =  jest.spyOn(wrapper.instance(), 'fetchHomeworld'); 
      const mockSpecies = 'https://swapi.co/api/species/1/';
      const mockPerson = mockPeople.results;
      console.log(mockPerson)
      fetchCharacterInfo(mockPerson);
      expect(fetchSpeciesInfo).toHaveBeenCalledWith(mockSpecies);
    });

    it('throws an error if status code is not ok', async () => {
      
  
      // await expect(fetchFilm()).rejects.toEqual('Error grabbing film')
    });
  });

  describe('fetchSpeciesInfo', () => {
    let mockSpecies = 'Human';

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockSpecies)
      }));
    });

    it('should be called with the correct params', async () => {
      const expected = 'https://swapi.co/api/species/1/';

      await fetchSpeciesInfo('https://swapi.co/api/species/1/');
      expect(window.fetch).toHaveBeenCalledWith(expected);
    });

    it('returns an species if status code is ok', async () => {
      await expect(fetchSpeciesInfo()).resolves.toEqual(mockSpecies);
    });

    it('throws an error if status code is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500
      }));
  
      await expect(fetchSpeciesInfo()).rejects.toEqual('Fetch for species failed');
    });
  });

  describe('fetchHomeworld', () => {
    let mockHomeworld = 'Tatooine';

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockHomeworld)
      }));
    });

    it('should be called with the correct params', async () => {
      const expected = 'https://swapi.co/api/planets/1/';

      await fetchHomeworld('https://swapi.co/api/planets/1/');
      expect(window.fetch).toHaveBeenCalledWith(expected);
    });

    it('returns a homeworld if status code is ok', async () => {
      await expect(fetchSpeciesInfo()).resolves.toEqual(mockHomeworld);
    });

    it('throws an error if status code is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500
      }));
  
      await expect(fetchHomeworld()).rejects.toEqual('Fetch for homeworld failed');
    });
  });

  describe('fetchPlanetInfo', () => {

  });

  describe('fetchResidentInfo', () => {
    let mockResident = 'Bobafet';

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockResident)
      }));
    });

    it('should be called with the correct params', async () => {
      const expected = 'https://swapi.co/api/people/5/';

      await fetchResident('https://swapi.co/api/people/5/');
      expect(window.fetch).toHaveBeenCalledWith(expected);
    });

    it('returns a resident if status code is ok', async () => {
      await expect(fetchResident()).resolves.toEqual(mockResident);
    });

    it('throws an error if status code is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500
      }));
  
      await expect(fetchResident()).rejects.toEqual('Failed to fetch resident');
    });
  });
});

