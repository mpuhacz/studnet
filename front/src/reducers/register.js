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

export default function (state = defaultState, action) {
  switch(action.type) {
    case REGISTER_CALL:
      return Object.assign({}, state, {
        isLoggedIn: false,
        isLoggingIn: true,
        error: {},
      });
    case REGISTER_SUCCESS:
      return Object.assign({}, state, {
        isLoggedIn: true,
        isLoggingIn: false,
        error: null,
      });
    case REGISTER_FAILED:
      return Object.assign({}, state, {
        isLoggedIn: false,
        isLoggingIn: false,
        error: action.payload,
      });
    default:
      return state;
  }
}
