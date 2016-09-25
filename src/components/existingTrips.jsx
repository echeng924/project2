//this component will display existing trips
//include a request to reach exisiting information

import React, { Component } from 'react';
import request from 'superagent';
import { Link } from 'react-router';
import firebase from '../../firebase.config.js';


class ExistingTrips extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
      trips: [],
    };
    this.httpGetRequest = this.httpGetRequest.bind(this);
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({
        user: user.uid,
      });
      this.httpGetRequest();
    })
  }
  httpGetRequest() {
    const baseUrl = `https://roadtrip-app-1474472241721.firebaseio.com/users/${this.state.user}/trips.json`;
    request.get(baseUrl)
           .then((response) => {
            const tripData = response.body;
            console.log("tripdata", tripData);
            /*
            tripdata = {
                "Trip1": {
                  "Place1"...
                }
                "Trip2": {
                  "Place1"...
                }
            }
            tripdata.Trip1
            tripdata["Trip1"]
            */
            let trips = [];
            if(tripData) {
              trips = Object.keys(tripData).map((key) => {
                console.log(key);
                //tripData[key]... key = "Trip1", "Trip2", ...
                const indvTrip = tripData[key];
                console.log(indvTrip);
                return key;
                console.log(indvTrip.Place1);
              })
              console.log(trips)

            }
            this.setState({ trips: trips, });
            console.log(`state ${this.state.trips}`);
           });
  }
  render() {
    console.log('render', this.state.trips);
    const tripElements = this.state.trips.map((item, id) => {
      console.log('tripElements', item);
      return (
        <Link to={`/editTrip/${item}`}>
        <div key={id} className="existing-trip">
          {
            item
          }
        </div>
        </Link>
      )
       console.log(tripElements);
    })
    return (
      <div>
        <div>
          {tripElements}
        </div>
        <div id="existing-newTrip">
          <Link to="/createTrip">Create a new trip</Link>
        </div>
      </div>
    )
  }
}

export default ExistingTrips;
