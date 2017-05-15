import register from './register';
import {
  REGISTER_CALL,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
} from '../actions';

const defaultState = {
  isRegistered: false,
  isLoggedIn: false,
  error: null,
};

describe('Register reducer', () => {
  it('returns proper initial state', () => {
    expect(register(undefined, {})).toEqual(defaultState);
  });

  it('sets state properly on REGISTER_FAILED action', () => {
    expect(register(undefined, {
      type: REGISTER_FAILED,
      payload: { a: 1 },
      company: { ...defaultState },
    })).toEqual({
      ...defaultState,
      error: { a: 1},
      isLoggingIn: false,
      isLoggedIn: false
    });
  });

  it('ets state properly on REGISTER_SUCCESS action', () => {
    expect(register(defaultState,
      { type: REGISTER_SUCCESS },
    )).toEqual({
      ...defaultState,
      isLoggedIn: true,
      isLoggingIn: false,
      isRegistered: false,
    });
  });
});
