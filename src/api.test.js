import fetchApiData from './api'
import mockPeople from './mockData/mockPeople';

describe('API', () => {
  describe('fetchCharacterInfo', () => {
    let mockCharacters; 

    beforeEach(() => {
      mockCharacters = mockPeople
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve({
          characters: mockCharacters,
        })
      }))
    })

    it('fetch is called with the right params', () => {
      const expected = {

      }
    })

    it('should return ', () => {
      
    })
  })
})