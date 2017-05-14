import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGIN_CALL,

  SET_PREFERENCES,
  SET_PREFERENCES_FAIL,
  SET_PREFERENCES_SUCCESS,
} from '../actions';

const defaultState = {
  apiToken: '',
  isLoggingIn: false,
  isLoggedIn: false,
  error: null,
  preferencesSet: false,
  isSettingPreferences: false,
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
      // TODO: Add reducing these actions
    case SET_PREFERENCES:
    case SET_PREFERENCES_FAIL:
    case SET_PREFERENCES_SUCCESS:
    default:
      return state;
  }
}
