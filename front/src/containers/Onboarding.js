import { connect } from 'react-redux';
import Onboarding from '../components/Onboarding';
import { loginAPI } from '../actions/index';
import { push } from 'react-router-redux'

const mapStateToProps = (state, ownProps) => { console.log(state); return {
  preferencesSet: state.reducers.user.preferencesSet,
  isLoading: state.reducers.user.isSettingPreferences,
}};

const mapDispatchToProps = (dispatch, ownProps) => ({
  setUserPreferences: (town, school, course) => dispatch(loginAPI(town, school, course)),
  goToStream: () => dispatch(push('/stream')),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Onboarding);