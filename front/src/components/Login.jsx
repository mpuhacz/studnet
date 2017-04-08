import React, { Component } from 'react';

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

  render() {
    return (
      <form className="ui form" onSubmit={this.onFormSubmit}>
        <div className="field">
          <label>Email</label>
          <input type="text" name="first-name" placeholder="First Name" value={this.state.email} onChange={this.handleMailChange}/>
        </div>
        <div className="field">
          <label>Password</label>
          <input type="text" name="last-name" placeholder="Last Name" value={this.state.password} onChange={this.handlePasswordChange}/>
        </div>
        <button className="ui button" type="submit">Submit</button>
      </form>
    );
  }
}

export default Login;
