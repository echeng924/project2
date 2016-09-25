//this component will be main App which will hold trip input form and trip list

import React, { Component } from 'react';
import { withRouter } from 'react-router';
import request from 'superagent';
import firebase from '../../firebase.config.js';

class CreateTrip extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
      data: [],
    }
    this.httpGetRequest = this.httpGetRequest.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
  handleSubmit(e) {
    e.preventDefault();
    console.log('name submitted');
    this.props.router.push('/editTrip');
  }
  render() {
    return(
      <div>
        <h1>
          this is the create trip component
        </h1>
        <div>
          <form name="tripName-input" onSubmit={this.handleSubmit}>
            Enter a trip name:
            <input name="trip-name" type="text" />
            <input type="submit" name="name-submit" value="Submit!" />
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(CreateTrip);
