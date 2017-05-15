import user from './user';
import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGIN_CALL,
} from '../actions';

const defaultState = {
  apiToken: '',
  isLoggingIn: false,
  isLoggedIn: false,
  error: null,
  preferencesSet: false,
  isSettingPreferences: false,
};

describe('User reducer', () => {
  it('returns proper initial state', () => {
    expect(user(undefined, {})).toEqual(defaultState);
  });

  it('LOGIN_SUCCESS', () => {
    expect(user(undefined, {
      type: LOGIN_SUCCESS,
      payload: { key: 1 },
      company: { ...defaultState },
    })).toEqual({
      ...defaultState,
      apiToken: 1,
      isLoggingIn: false,
      isLoggedIn: true
    });
  });

  it('LOGIN_FAILED', () => {
    expect(user(defaultState,
      { type: LOGIN_FAILED },
    )).toEqual({
      ...defaultState,
      error: undefined,
      isLoggedIn: false,
      isLoggingIn: false,
    });
  });
});
