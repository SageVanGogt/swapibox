import React from 'react';
import { shallow } from 'enzyme';
import Card from './index';

describe('Card component', () => {
  let name = 'padawan'; 
  let species = 'padawan'; 
  let homeworld = 'padawan'; 
  let homeworldPopulation = 'padawan'; 
  let terrain = 'padawan'; 
  let climate = 'padawan'; 
  let population = 'padawan'; 
  let residents = 'padawan';
  let model = 'padawan'; 
  let vehicleClass = 'padawan'; 
  let passengerCount = 'padawan';

  it('should match the snapshot of when it recieves the planet props', () => {
    const props = {
      residents, 
      name,
      terrain,
      population, 
      climate
    };
    const wrapper = shallow(<Card {...props}/>);

    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot when it receives vehicle props', () => {
    const props = {
      name, 
      vehicleClass,
      model,
      passengerCount
    };
    const wrapper = shallow(<Card {...props}/>);
    

    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot when it recieves people props', () => {
    const props = {
      name, 
      species,
      homeworld,
      homeworldPopulation
    };
    const wrapper = shallow(<Card {...props}/>);

    expect(wrapper).toMatchSnapshot();    
  });
});