import fetchApiData from './api'
import people from './mockData/mockPeople';
import vehicles from './mockData/mockFilms';
import planets from './mockData/mockPlanets';
import { getCleanVehicles, getCleanCharacters } from './helper'

describe('API', () => {
  describe('fetch vehicle info', () => {
    let mockVehicles;

    beforeEach(() => {
      mockVehicles = vehicles;        
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(mockVehicles)
      }))
    })

    it('fetch vehicle is called with the correct params', async () => {
      const expected = 'https://swapi.co/api/vehicles/';

      fetchApiData('vehicles');

      expect(window.fetch).toHaveBeenCalledWith(expected);
    })

    it('fetch vehicle info returns an array of vehicles', async () => {
      const category = 'vehicles';
      const actual = await fetchApiData(category);
      const expected = await getCleanVehicles(mockVehicles);

      expect(actual).toEqual(expected);
    })
  })

  describe('fetch characters info', () => {
    let mockCharacters;

    beforeEach(() => {
      mockCharacters = people;     
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(mockCharacters)
      }))   
    })

    it('fetch characters is called with the correct params', async () => {
      const expected = 'https://swapi.co/api/people/';

      fetchApiData('people');

      expect(window.fetch).toHaveBeenCalledWith(expected);
    })
  
    it('fetch api call should call getCleanCharacters with correct info', async () => {
      const category = 'people';
      const actual = await fetchApiData(category);
      const expected = {
                          name: 'Luke Skywalker',
                          species: undefined,
                          homeworld: undefined,
                          homeworldPopulation: undefined,
                          favorited: false 
                        }
      expect(actual[0]).toEqual(expected)
    })
  })

  describe('fetch planets info', () => {
    let mockPlanets;

    beforeEach(() => {
      mockPlanets = planets;     
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(mockPlanets)
      }))   
    })

    it('fetch Planets is called with the correct params', async () => {
      const expected = 'https://swapi.co/api/planets/';

      fetchApiData('planets');

      expect(window.fetch).toHaveBeenCalledWith(expected);
    })
  
    it('fetch api call should call getCleanPlanets with correct info', async () => {
      const category = 'planets';
      const actual = await fetchApiData(category);
      const expected = {
                        climate: "temperate", 
                        name: "Alderaan", 
                        population: "2000000000", 
                        residents: [undefined, undefined, undefined], 
                        terrain: "grasslands, mountains",
                        favorited: false
                        }
      expect(actual[0]).toEqual(expected)
    })

    it('should throw an error when hitting the catch block in the fetch request', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.reject({
        status: 500
      }));
      const expectedError = Error('fetch failed');
      const getVehicleDataRes = await fetchApiData('planets');

      expect(getVehicleDataRes).toEqual(expectedError);
    });
  })

  describe.skip('addGrocery', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve({
          groceries: mockGroceries,
        }),
      }))
    })
  
    it('fetch is called with the correct params', async () => {
      const mockGrocery = {name: 'Oranges', quantity: 3}
      const expected = [
        "/api/v1/groceries", 
        {
          body: JSON.stringify({ grocery: mockGrocery }),
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST"
        }
      ]
  
      await addGrocery(mockGrocery)
      expect(window.fetch).toHaveBeenCalledWith(...expected)
    })
  
    it('returns an object if status code is ok', async () => {
      const mockGrocery = {name: 'Oranges', quantity: 3}
      const mockGroceries = [
        {id: 1, name: 'Pineapples', quantity: 10},
        {id: 2, name: 'Oranges', quantity: 3}
      ]
  
      await expect(addGrocery(mockGrocery)).resolves.toEqual({groceries: mockGroceries})
    })
  
    it('throws an error if status code is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500,
      }))
  
      await expect(addGrocery()).rejects.toEqual(Error('Error adding grocery'))
    })
  })
})