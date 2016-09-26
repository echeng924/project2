//This file will allow users to register.

import React, { Component } from 'react';
import { withRouter } from 'react-router';
import firebase from '../../firebase.config.js';

class Register extends Component {
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
            .createUserWithEmailAndPassword(username, password)
            .catch((err) => {
              console.log(err);
            })
            .then((user) => {
              firebase.database().ref('users')
                      .child(user.uid)
                      .set({full_name:'', email: username})
            })
            .then(() => {
              this.props.router.push('/createTrip');
            })
  }
  render() {
    return (
      <div>
        <h1 id="registerTitle">Register for an account!</h1>
        <div id="registerForm">
          <div id="registerUsername">
            Username:
            <input name="username" onChange={this.handleEdit} type="text" placeholder="username" />
          </div>
          <div id="registerPassword">
            Password:
            <input name="password" onChange={this.handleEdit} type="password" placeholder="password" />
          </div>
          <button className="registerBtn" onClick={this.handleSubmit}>Register</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Register);


