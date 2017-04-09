import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      username: '',
      confirmPassword: '',
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

  handleConfirmPasswordChange = (e) => {
    this.setState({
      confirmPassword: e.target.value,
    });
  }

  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  }

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.registerUser(
      this.state.username,
      this.state.email,
      this.state.password,
      this.state.confirmPassword,
    );
  }

  componentWillReceiveProps() {
    if (this.props.location.pathname === '/login' && this.props.isLoggedIn) {
      this.props.goToDashboard();
    }
  }

  renderLoadingIndicator() {
    return (
      <div className="ui icon message">
        <i className="notched circle loading icon"></i>
        <div className="content">
          <div className="header">
            Just one second
          </div>
          <p>Registering</p>
        </div>
      </div>
    );
  }

  renderForm() {
    return (
      <form className="ui form" onSubmit={this.onFormSubmit}>
        <h1 className="ui header">Register</h1>
        <div className="field">
          <label>Username</label>
          <input type="text" name="first-name" placeholder="Your Username" value={this.state.username} onChange={this.handleUsernameChange}/>
        </div>
        <div className="field">
          <label>Email</label>
          <input type="text" name="first-name" placeholder="Your Email" value={this.state.email} onChange={this.handleMailChange}/>
        </div>
        <div className="field">
          <label>Password</label>
          <input type="text" name="last-name" placeholder="*******" value={this.state.password} onChange={this.handlePasswordChange}/>
        </div>
        <div className="field">
          <label>Confirm Password</label>
          <input type="text" name="last-name" placeholder="*******" value={this.state.confirmPassword} onChange={this.handleConfirmPasswordChange}/>
        </div>
        <button className="ui button" type="submit">Submit</button>
        <Link to={'/login'}>
          <button className="ui button">Already have account? Login</button>
        </Link>
        {
          this.props.registerError &&
          <div className="ui message">
            <p>{JSON.stringify(this.props.registerError)}</p>
          </div>
        }
      </form>
    );
  }

  render() {
    if (this.props.isLoggingIn) {
      return this.renderLoadingIndicator();
    } else {
      return this.renderForm();
    }
  }
}

export default Login;
