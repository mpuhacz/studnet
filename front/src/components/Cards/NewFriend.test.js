import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import NewFriend from './NewFriend';

describe('<NewFriend />', () => {
  it('renders NewFriend without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NewFriend
      avatar="https://semantic-ui.com/images/avatar/small/justen.jpg"
      name="Name"
      likes={1}
    />, div);
  });

  it('renders NewFriend form with correct specification', () => {
    const wrapper = renderer.create(<NewFriend
      avatar="https://semantic-ui.com/images/avatar/small/justen.jpg"
      name="Name"
      likes={1}
    />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
