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
import Intro from './components/Intro';

import reducers from './reducers'

const store = createStore(
  combineReducers({
    reducers,
  }),
  applyMiddleware(apiMiddleware),
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/intro" componen={Intro} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
