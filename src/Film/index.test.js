import React from 'react';
import Film from './index';
import { shallow } from 'enzyme';

describe('Film container component', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Film />);

    expect(wrapper).toMatchSnapshot();
  })
})