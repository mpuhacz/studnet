import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Navbar from './Navbar';

describe('<Navbar />', () => {
  it('renders Navbar without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Navbar/>, div);
  });

  it('renders Navbar form with correct specification', () => {
    const wrapper = renderer.create(<Navbar/>);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
