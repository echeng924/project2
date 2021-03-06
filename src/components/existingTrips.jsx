//this component will display existing trips
//include a request to reach exisiting information

import React, { Component } from 'react';
import request from 'superagent';
import { Link } from 'react-router';
import { GoogleMap } from 'react-google-maps';
import firebase from '../../firebase.config.js';


class ExistingTrips extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
      trips: [],
    };
    this.httpGetRequest = this.httpGetRequest.bind(this);
    this.handleTripDelete = this.handleTripDelete.bind(this);
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({
        user: user.uid,
      });
      this.httpGetRequest();
    });
  }
  httpGetRequest() {
    const baseUrl = `https://roadtrip-app-1474472241721.firebaseio.com/users/${this.state.user}/trips/.json`;
    request.get(baseUrl)
           .then((response) => {
            const tripData = response.body;
            console.log('tripdata', tripData);
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
                console.log(trips);

              }
              this.setState({ trips: trips, });
              console.log(`state ${this.state.trips}`);
            });
  }
  handleTripDelete(tripName) {
    console.log('trip deleted');
    console.log(tripName);
    const baseUrl = `https://roadtrip-app-1474472241721.firebaseio.com/users/${this.state.user}/trips/${tripName}.json`;
    console.log(baseUrl);
    request.del(baseUrl)
           .then(() => {
            this.httpGetRequest();
           });
  }
  render() {
    console.log('render', this.state.trips);
    const tripElements = this.state.trips.map((tripName, id) => {
      console.log('tripElements', tripName);
      return (
        <div key={id} id="group">
          <div className="existing-trip">
            <Link to={`/editTrip/${tripName}`}>
            {
              tripName
            }
            </Link>
            <button onClick={() => this.handleTripDelete(tripName)}>Delete</button>
          </div>
        </div>
      );
       console.log(tripElements);
    });
    return (
      <div>
        <div className="map">
          <GoogleMap
            containerProps={{
              style: {
                height: '100%',
              },
            }}
            defaultZoom={2}
            defaultCenter={{ lat: 40.71, lng: -74.01 }}
          >
          </GoogleMap>
        </div>
        <div id="existingTripContent">
          <h1 id="existingTripTitle">Select trip to update</h1>
          <div className="tripItemView">
            {tripElements}
          </div>
          <div id="existing-newTrip">
            <Link to="/createTrip">Create a new trip</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ExistingTrips;
