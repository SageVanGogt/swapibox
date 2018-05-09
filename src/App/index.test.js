import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from './index';
import films from './../mockData/mockFilms';

describe('App component', () => {
  let mockFilms;

  beforeEach(() => {
    mockFilms = films;
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockFilms)
    }))
  })

  it('should match the snapshot', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  })

  it('Should render with the correct default state', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.state('currentRandomFilm')).toEqual({});
    expect(wrapper.state('currentSectionData')).toEqual([]);
  });

  it('fetchfilm return an array of films', async () => {
    const wrapper = shallow(<App />)
    const expected = mockFilms
    const getRandomFilm = jest.fn().mockImplementation(() => {
      return expected
    });
    const actual = await wrapper.instance().fetchFilm()

    expect(actual).toEqual(expected);
  })
})
