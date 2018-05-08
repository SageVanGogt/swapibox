import { getRandomFilm, getCleanCharacters } from './helper';
import films from './mockData/mockFilms';
import people from './mockData/mockPeople';
import planets from './mockData/mockPlanets';

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
  
})

