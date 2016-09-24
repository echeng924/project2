//this component will be main App which will hold trip input form and trip list

import React, { Component } from 'react';
import request from 'superagent';
import firebase from '../../firebase.config.js';
import TripInputForm from './tripInputForm.jsx';
import TripList from './tripList.jsx';

class CreateTrip extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
      data: [],
    }
    this.httpGetRequest = this.httpGetRequest.bind(this);
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({
        user: user.uid,
      });
      console.log(`${user.uid} uid`);
      console.log(`${this.state.user} state`);
      this.httpGetRequest();
    });
  }
  httpGetRequest() {
    console.log('user:');
    console.log(this.state.user);
    const baseUrl=`https://roadtrip-app-1474472241721.firebaseio.com/users/${this.state.user}/trips.json`;
    request.get(baseUrl)
           .then((response) => {
            console.log(response);
            const tripData = response.body;
            console.log(this.state.user);
            let tripItems = [];
            if(tripData) {
              tripItems = Object.keys(tripData).map((key) => {
                const indvTrip = tripData[key];
                console.log(indvTrip);
                return {
                  Place1: indvTrip.Place1,
                  Place2: indvTrip.Place2,
                  Place3: indvTrip.Place3,
                }
              })
            }
            console.log(tripData);
            console.log(tripItems);
           })
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
