import { CALL_API } from 'redux-api-middleware';

const BASE_API_URL = 'http://localhost:8000';

const LOGIN_URL = `${BASE_API_URL}/rest-auth/login/`;
const REGISTRATION_URL = `${BASE_API_URL}/rest-auth/registration/`;

const POST = 'POST';
const GET = 'GET';

export const LOGIN_CALL = 'LOGIN_CALL';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const loginAPI = (username, password) => ({
  [CALL_API]: {
    endpoint: LOGIN_URL,
    method: POST,
    headers: { 'Content-Type': 'application/json' },
    types: [LOGIN_CALL, LOGIN_SUCCESS, LOGIN_FAILED],
    body: JSON.stringify({
      username,
      password,
    }),
  }
});
