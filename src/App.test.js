import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from './Header';
import Images from './Images';

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders a <Header /> component', () => {
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('renders a <Images /> component', () => {
    expect(wrapper.find(Images)).toHaveLength(1);
  });
});
