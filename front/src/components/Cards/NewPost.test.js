import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import NewPost from './NewPost';

describe('<NewPost />', () => {
  it('renders NewPost without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NewPost
      avatar="https://semantic-ui.com/images/avatar/small/justen.jpg"
      name="Name"
      likes={1}
      text="123"
    />, div);
  });

  it('renders NewPost form with correct specification', () => {
    const wrapper = renderer.create(<NewPost
      avatar="https://semantic-ui.com/images/avatar/small/justen.jpg"
      name="Name"
      likes={1}
      text="123"
    />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
