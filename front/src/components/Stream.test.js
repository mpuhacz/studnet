import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Stream from './Stream';

describe('<Stream />', () => {
  it('renders Stream without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Stream />, div);
  });
});
