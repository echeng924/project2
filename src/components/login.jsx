//This file will handle login AND register component for users to create and login to their accounts
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import firebase from '../../firebase.config.js';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    }

  }
  render() {
    return (
      <div>
        <h1>Login component</h1>
        <div id="login-form">
          <div id="username-input">
            <input name="username" onChange={this.handleEdit} type="text" placeholder="username" />
          </div>
          <div id="password-input">
            <input name="password" onChange={this.handleEdit} type="password" placeholder="password" />
          </div>
          <button id="loginBtn" onClick={this.handleSubmit}>Login</button>
        </div>
      </div>
    )
  }

}
