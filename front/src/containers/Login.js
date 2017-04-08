import { connect } from 'react-redux';
import Login from '../components/Login';
import { loginAPI } from '../actions/index';

const mapStateToProps = state => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loginUser: (username, password) => dispatch(loginAPI(username, password)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);