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
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleEdit(e) {
    const stateObj = {};
    const stateKey = e.target.name;
    stateObj[stateKey] = e.target.value;
    this.setState(stateObj);
  }
  handleSubmit() {
    const { username, password } = this.state;
    firebase.auth()
            .signInWithEmailAndPassword(username, password)
            .catch((err) => {
              const errorCode = err.code;
              const errorMessage = err.message;
              console.log(err)
            })
            .then(() => {
              this.props.router.push('/yourTrips');
            })
            console.log(firebase.auth().currentUser);
  }

  render() {
    return (
      <div>
        <h1 id="loginTitle">Login to see your trips:</h1>
        <div id="loginForm">
          <div id="usernameInput">
            Username:
            <input name="username" onChange={this.handleEdit} type="text" placeholder="username" />
          </div>
          <div id="passwordInput">
            Password:
            <input name="password" onChange={this.handleEdit} type="password" placeholder="password" />
          </div>
          <button id="loginBtn" onClick={this.handleSubmit}>Login</button>
        </div>
      </div>
    )
  }
}

export default withRouter(Login);
