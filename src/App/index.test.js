import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from './index';
import films from './../mockData/mockFilms';

describe.skip('App component', () => {
  let mockFilms;
  let mockPeopleData;

  beforeEach(() => {
    // mockFilms = films;
    // window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    //   json: () => Promise.resolve(mockFilms)
    // }));
    mockPeopleData = [{
      homeworld: "Tatooine",
      homeworldPopulation: "200000",
      name: "Luke Skywalker",
      species: "Human",
      favorited: false
    },
    {
      homeworld: "Naboo",
      homeworldPopulation: "4500000000",
      name: "R2-D2",
      species: "Droid",
      favorited: false
    }]
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

  it('handleFavorite should locate a card in currentSectionData and place it in allData.favorites', () => {
    const wrapper = shallow(<App />);
    const mockEvent = {target: {value: 'Luke Skywalker'}}

    wrapper.setState({currentSectionData: mockPeopleData});
    wrapper.instance().handleFavorite(mockEvent);
    
    expect(wrapper.state('allData').favorites.length).toEqual(1);
  })

  it('handleclickEvent', () => {
    
  })

  it('setStateToExistingData should set currentSectionData to data from allData', () => {
    const wrapper = shallow(<App />);
    const mockEvent = {target: {value: 'Luke Skywalker'}}
    const allData = {people: mockPeopleData}
    
    wrapper.setState({allData});
    wrapper.instance().setStateToExistingData('people');

    expect(wrapper.state('currentSectionData')).toEqual(mockPeopleData)
  })

  it('handleClickEvent should call setStateToExistingData if there is data in the allData object', () => {
    const wrapper = shallow(<App />);
    const mockEvent = {target: {name: 'people'}}
    const allData = {people: mockPeopleData}
    const spy =  jest.spyOn(wrapper.instance(), 'setStateToExistingData');
    wrapper.setState({allData})
    wrapper.instance().handleClickEvent(mockEvent);

    expect(spy).toHaveBeenCalledWith('people')
  })

  // it('handleClickEvent should call fetchApiData if there is no data in the allData object', () => {
  //   const wrapper = shallow(<App />);
  //   const mockEvent = {target: {name: 'people'}}
  //   const spy =  jest.spyOn(wrapper.instance(), 'fetchApiData');
  //   wrapper.instance().handleClickEvent(mockEvent);

  //   expect(spy).toHaveBeenCalledWith('people')
  // })

})
