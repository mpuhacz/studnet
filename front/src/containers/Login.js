import { connect } from 'react-redux';
import Login from '../components/Login';
import { loginAPI } from '../actions/index';
import { push } from 'react-router-redux'

const mapStateToProps = state => { console.log(state); return {
  isLoggedIn: state.reducers.user.isLoggedIn,
  isLoggingIn: state.reducers.user.isLoggingIn,
  loginError: state.reducers.user.error,
}};

const mapDispatchToProps = (dispatch, ownProps) => ({
  loginUser: (username, password) => dispatch(loginAPI(username, password)),
  goToDashboard: () => dispatch(push('/dashboard'))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);