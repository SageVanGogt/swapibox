import React from 'react';
import { shallow } from 'enzyme';
import CardContainer from './index';

describe('Card Container component', () => {
  it('should match the snapshot', () => {
    const currentSectionData = [{
      name: 'rambo', 
      vehicleClass: 'rambo',
      model: 'rambo',
      passengerCount: 'rambo'
    }];
    const wrapper = shallow(<CardContainer 
      currentSectionData={currentSectionData}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});