import fetchApiData from './api'
import people from './mockData/mockPeople';
import vehicles from './mockData/mockFilms';
import { getCleanVehicles, getCleanCharacters } from './helper'

describe('API', () => {
  describe('fetchCharacterInfo', () => {
    
    describe('fetch vehicle info', () => {
      let mockVehicles;

      beforeEach(() => {
        mockVehicles = vehicles;        
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
          json: () => Promise.resolve(mockVehicles)
        }))
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

      it('fetch is called with the correct params', async () => {
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
                            homeworldPopulation: undefined 
                          }
        expect(actual[0]).toEqual(expected)
      })
    })
  })
})