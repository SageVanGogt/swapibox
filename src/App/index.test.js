import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App component', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  })

  it('Should render with the correct default state', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.state('currentRandomFilm')).toEqual({});
    expect(wrapper.state('currentSectionData')).toEqual([]);
  });

  it('should set state of currentRandomFilm upon mounting', () => {
    const wrapper = mount(<App />);
    wrapper.update();
    const actual = Object.keys(wrapper.state('currentRandomFilm'));
    const expected = 3

    expect(actual.length).toEqual(expected);
  })
})
