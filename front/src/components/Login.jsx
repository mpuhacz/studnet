import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleMailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.loginUser(this.state.email, this.state.password);
  }

  componentWillReceiveProps() {
    if (this.props.location.pathname === '/login' && this.props.isLoggedIn) {
      this.props.goToDashboard();
    }
  }

  goToRegister = (e) => {
    e.preventDefault();
    this.props.goToRegister();
  }

  renderLoadingIndicator() {
    return (
      <div className="ui icon message">
        <i className="notched circle loading icon"></i>
        <div className="content">
          <div className="header">
            Just one second
          </div>
          <p>Logging in</p>
        </div>
      </div>
    );
  }

  renderForm() {
    return (
      <form className="ui form" onSubmit={this.onFormSubmit}>
        <h1 className="ui header">Login</h1>

        <div className="field">
          <label>Email</label>
          <input type="text" name="first-name" placeholder="Your Username" value={this.state.email} onChange={this.handleMailChange}/>
        </div>
        <div className="field">
          <label>Password</label>
          <input type="text" name="last-name" placeholder="*******" value={this.state.password} onChange={this.handlePasswordChange}/>
        </div>
        <button className="ui button" type="submit">Submit</button>
        <Link to={'/register'}>
          <button className="ui button">Dont' have account? Register</button>
        </Link>
        {
          this.props.loginError &&
          <div className="ui message">
            <p>{JSON.stringify(this.props.loginError)}</p>
          </div>
        }
      </form>
    );
  }

  render() {
    if (this.props.isLoggedIn) {
      return (<Redirect to={{
        pathname: '/dashboard',
        state: { from: this.props.location }
      }}/>);
    }

    if (this.props.isLoggingIn) {
      return this.renderLoadingIndicator();
    } else {
      return this.renderForm();
    }
  }
}

export default Login;
