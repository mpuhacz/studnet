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
};

export default function (state = defaultState, action) {
  console.log(action);

  switch(action.type) {
    case LOGIN_CALL:
      return Object.assign({}, state, {
        isLoggedIn: false,
        isLoggingIn: true,
        error: {},
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoggedIn: true,
        isLoggingIn: false,
        apiToken: action.payload.key,
        error: null,
      });
    case LOGIN_FAILED:
      return Object.assign({}, state, {
        isLoggedIn: false,
        isLoggingIn: false,
        error: action.payload,
      });
    default:
      return state;
  }
}
