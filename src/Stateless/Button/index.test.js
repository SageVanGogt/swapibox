import React from 'react';
import Button from './index';
import { shallow } from 'enzyme';
import './../../setupTests';

describe('Button component', () => {
  it('should render a button', () => {
    const actual = shallow(<Button />);

    expect(actual).toMatchSnapshot();
  });

  it('should render the apppropriate button depending on which section prop is passed in', () => {
    const actual = shallow(<Button section={'vehicles'}/>);

    expect(actual).toMatchSnapshot();
  });

  it('should call handleClickEvent onClick if it is a section button', () => {
    const handleClickEvent = jest.fn();
    const mockEvent = {target: {name: 'vehicles'}};
    const wrapper = shallow(<Button 
      section={'vehicles'} 
      handleClickEvent={handleClickEvent}
    />);

    wrapper.find('button').simulate('click', mockEvent);
    expect(handleClickEvent).toBeCalledWith(mockEvent);
  });

  it('should call handleFavorite onClick if it is a favorite button', () => {
    const handleFavorite = jest.fn();
    const mockEvent = {target: {name: 'favorite'}};
    const wrapper = shallow(<Button 
      section={'favorite'} 
      handleFavorite={handleFavorite}
    />);

    wrapper.find('button').simulate('click', mockEvent);
    expect(handleFavorite).toBeCalledWith(mockEvent);
  });

  it('should have a favorite-active class if favorited prop value is true', () => {
    const wrapper = shallow(<Button 
      section={'favorite'} 
      favorited={true}
    />);
    
    expect(wrapper.find('button').hasClass('favorite-active')).toBe(true);
  });
});