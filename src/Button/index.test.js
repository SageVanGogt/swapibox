import React from 'react';
import Button from './index';
import { shallow } from 'enzyme';
import './../setupTests';

describe('Button component', () => {
  it('should render a button', () => {
    const actual = shallow(<Button />)

    expect(actual).toMatchSnapshot();
  });

  it('should render the apppropriate button depending on which section prop is passed in', () => {
    const actual = shallow(<Button section={'vehicles'}/>)

    expect(actual).toMatchSnapshot();
  });

  it('should call handleClickEvent onClick', () => {
    const handleClickEvent = jest.fn();
    const mockEvent = {target: {name: 'vehicles'}};
    const wrapper = shallow(<Button 
      section={'vehicles'} 
      handleClickEvent={handleClickEvent}
    />);

    wrapper.find('button').simulate('click', mockEvent);
    expect(handleClickEvent).toBeCalledWith(mockEvent);
  });
})