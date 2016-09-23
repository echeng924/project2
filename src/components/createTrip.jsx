//this component will be main App which will hold trip input form and trip list

import React, { Component } from 'react';
import firebase from '../../firebase.config.js';
import TripInputForm from './tripInputForm.jsx';
import TripList from './tripList.jsx';

class CreateTrip extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
    }
  }
  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({
        user: user.uid,
      });
      console.log(`${user.uid} uid`);
      console.log(`${this.state.user} state`);
    });
  }
  render() {
    return(
      <div>
        <h1>
          this is the create trip component
        </h1>
        <div>
          <TripInputForm />
          <TripList />
        </div>
      </div>
    );
  }
}

export default CreateTrip;
