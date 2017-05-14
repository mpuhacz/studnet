import { connect } from 'react-redux';
import Register from '../components/Register';
import { registerAPI } from '../actions/index';
import { push } from 'react-router-redux'

const mapStateToProps = (state, ownProps) => { console.log(state); return {
  isLoggedIn: state.reducers.register.isRegistered,
  isLoggingIn: state.reducers.register.isRegistering,
  registerError: state.reducers.register.error,
  location: ownProps.location,
}};

const mapDispatchToProps = (dispatch, ownProps) => ({
  registerUser: (username, email, password, confirmPassword) =>
    dispatch(registerAPI(username, email, password, confirmPassword)),
  goToDashboard: () => dispatch(push('/intro')),
  goToLogin: () => dispatch(push('/login')),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Register);