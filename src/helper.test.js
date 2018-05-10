import { getRandomFilm, getCleanCharacters, getCleanPlanets, getCleanVehicles } from './helper';
import films from './mockData/mockFilms';
import people from './mockData/mockPeople';
import planets from './mockData/mockPlanets';
import vehicles from './mockData/mockVehicles';

describe('Data cleaner for film', () => { 
  it('should return a single random film object', () => {
    const expected = 'object';
    const actual = getRandomFilm(films);

    expect(typeof actual).toEqual(expected);
  })

  it('should return a clean object with only the desired data keys', () => {
    const actual = getRandomFilm(films);

    expect(actual.hasOwnProperty('openingCrawl')).toBe(true);
    expect(actual.hasOwnProperty('title')).toBe(true);
    expect(actual.hasOwnProperty('releaseYear')).toBe(true);
  })
})

describe('Data cleaner for people', () => {
  it('should return an array of all star wars characters', () => {
    const actual = getCleanCharacters(people);
    const expected = Array.isArray(actual);
     
    expect(expected).toBe(true);
    expect(actual.length).toEqual(10);
  })

  it('should return a cleaned object at each index with appropriate keys', () => {
    const result = getCleanCharacters(people)[0];
    
    expect(result.hasOwnProperty('name')).toBe(true);
    expect(result.hasOwnProperty('species')).toBe(true);
    expect(result.hasOwnProperty('homeworld')).toBe(true);
    expect(result.hasOwnProperty('homeworldPopulation')).toBe(true);
  })
})

describe('Data cleaner for planets', () => {
  it('should return an array of objects', () => {
    const actual = getCleanPlanets(planets);
    const expected = Array.isArray(actual);

    expect(expected).toBe(true);
  })

  it('should return an array of objects with length equal to planets passed in', () => {
    const actual = getCleanPlanets(planets);
    const expected = 10;

    expect(actual.length).toEqual(expected);
  })

  it('should return a cleaned object at each index with appropriate keys', () => {
    const result = getCleanPlanets(planets)[0];
    
    expect(result.hasOwnProperty('name')).toBe(true);
    expect(result.hasOwnProperty('terrain')).toBe(true);
    expect(result.hasOwnProperty('population')).toBe(true);
    expect(result.hasOwnProperty('climate')).toBe(true);
    expect(result.hasOwnProperty('residents')).toBe(true);
  })
})

describe('Data cleaner for vehicles', () => {
  it('should return an array of objects', () => {
    const actual = getCleanVehicles(vehicles);
    const expected = Array.isArray(actual);
    
    expect(expected).toBe(true);
  })

  it('should return an array of objects with length equal to vehicles passed in', () => {
    const actual = getCleanVehicles(vehicles);
    const expected = 10;

    expect(actual.length).toEqual(expected);
  })

  it('should return a cleaned object at each index with appropriate keys', () => {
    const result = getCleanVehicles(vehicles)[0];
    
    expect(result.hasOwnProperty('name')).toBe(true);
    expect(result.hasOwnProperty('model')).toBe(true);
    expect(result.hasOwnProperty('vehicleClass')).toBe(true);
    expect(result.hasOwnProperty('passengerCount')).toBe(true);
  })
})

