import React from 'react';
import { shallow } from 'enzyme';
import App from './index';
import films from './../mockData/mockFilms';
import { cleanPeople, cleanPeopleWithValues } from './../mockData/cleanPeople';

describe('App component', () => {
  let mockFilms;
  let mockPeopleData;

  beforeEach(() => {
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
  });

  it('should match the snapshot', () => {
    const wrapper = shallow(<App />, {disableLifecycleMethods: true});        
    expect(wrapper).toMatchSnapshot();
  });

  it('Should render with the correct default state', () => {
    const wrapper = shallow(<App />, {disableLifecycleMethods: true});      
    const expectedAllData = {
      vehicles: [], 
      planets: [], 
      people: [], 
      favorites: [], 
      favoriteCount: 0
    };
    expect(wrapper.state('currentRandomFilm')).toEqual({});
    expect(wrapper.state('currentSectionData')).toEqual([]);
    expect(wrapper.state('allData')).toEqual(expectedAllData);
  });
  
  it('handleFavorite should locate a card in currentSectionData and place it in allData.favorites', () => {
    const wrapper = shallow(<App />, {disableLifecycleMethods: true});    
    const mockEvent = {target: {value: 'Luke Skywalker'}};
    
    wrapper.setState({currentSectionData: mockPeopleData});
    wrapper.instance().handleFavorite(mockEvent);
    
    expect(wrapper.state('allData').favorites.length).toEqual(1);
  });
  
  it('setStateToExistingData should set currentSectionData to data from allData', () => {
    const wrapper = shallow(<App />, {disableLifecycleMethods: true});    
    const allData = {people: mockPeopleData};
    
    wrapper.setState({allData});
    wrapper.instance().setStateToExistingData('people');
    
    expect(wrapper.state('currentSectionData')).toEqual(mockPeopleData);
  });
  
  it('handleClickEvent should call setStateToExistingData if there is data in the allData object', () => {
    const wrapper = shallow(<App />, {disableLifecycleMethods: true});    
    const mockEvent = {target: {name: 'people'}};
    const allData = {people: mockPeopleData};
    const spy =  jest.spyOn(wrapper.instance(), 'setStateToExistingData');
    wrapper.setState({allData});
    wrapper.instance().handleClickEvent(mockEvent);
    
    expect(spy).toHaveBeenCalledWith('people');
  });
  
  it.skip('handleClickEvent should call fetchApiData and setState and allData if the relevant info is not already present', async () => {
    const wrapper = shallow(<App />, {disableLifecycleMethods: true});    
    const mockEvent = {target: {name: 'people'}};
    const mockCleanData = cleanPeople;
    const fetchApiData = jest.fn().mockImplementation(() => (mockCleanData));
    await wrapper.instance().handleClickEvent(mockEvent);
    
  
    expect(wrapper.state('currentSectionData')).toEqual(cleanPeopleWithValues);
  });
  
});
  