import getRandomFilm from './helper';
import films from './mockData/mockFilms';

describe('Data cleaner for film', () => {
  
  it('should return a single random film object', () => {
    const expected = 'object';
    const actual = getRandomFilm(films);

    expect(typeof actual).toEqual(expected)
  })

  it('should return a clean object with only the desired data keys', () => {
    const actual = getRandomFilm(films);

    expect(actual.hasOwnProperty('openingCrawl')).toBe(true);
    expect(actual.hasOwnProperty('title')).toBe(true);
    expect(actual.hasOwnProperty('releaseYear')).toBe(true);
  })
})

