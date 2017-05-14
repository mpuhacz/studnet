import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { apiMiddleware } from 'redux-api-middleware'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { createBrowserHistory } from 'history';

import Login from './containers/Login';
import Register from './containers/Register';
import Onboarding from './components/Onboarding';
import App from './App.css';

import reducers from './reducers'

/*
  Redux store creation
*/
const store = createStore(
  combineReducers({
    reducers,
  }),
  applyMiddleware(apiMiddleware),
);

/*
  Main router class.

  Add any new routes here. You can nest Routes inside Routes.
*/
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/onboarding" component={Onboarding} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
