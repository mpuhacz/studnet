import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Onboarding from './Onboarding';

beforeEach(() => {
  window.location.replace = jest.fn();
});

describe('<Onboarding />', () => {
  it('renders Onboarding without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Onboarding />, div);
  });

  it('renders Onboarding form with correct specification', () => {
    const wrapper = renderer.create(<Onboarding/>);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('fetches course suggestions correctly', () => {
    const wrapper = renderer.create(<Onboarding/>);

    wrapper.getInstance().onCourseSuggestionsFetchRequested({ value: 'Infor' });
    expect(wrapper.getInstance().state).toMatchSnapshot();
  });

  it('fetches university suggestions correctly', () => {
    const wrapper = renderer.create(<Onboarding/>);

    wrapper.getInstance().onUniversitySuggestionsFetchRequested({ value: 'poli' });
    expect(wrapper.getInstance().state).toMatchSnapshot();
  });

  it('fetches town suggestions correctly', () => {
    const wrapper = renderer.create(<Onboarding/>);

    wrapper.getInstance().onTownSuggestionsFetchRequested({ value: 'poz' });
    expect(wrapper.getInstance().state).toMatchSnapshot();
  });
});
