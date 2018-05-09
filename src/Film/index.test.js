import React from 'react';
import Film from './index';
import { shallow } from 'enzyme';

describe('Film container component', () => {
  it('should match the snapshot', () => {
    const props = {
      openingCrawl: 'aca', 
      title: 'aca', 
      releaseYear: 'aca'
    }
    const wrapper = shallow(<Film 
      currentRandomFilm={props}
    />);

    console.log(wrapper)

    expect(wrapper).toMatchSnapshot();
  })
})