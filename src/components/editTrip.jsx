//this component will be main App which will hold trip input form and trip list

import React, { Component } from 'react';
import request from 'superagent';
import {GoogleMapLoader, GoogleMap, Marker, SearchBox } from "react-google-maps";
import firebase from '../../firebase.config.js';
import TripInputForm from './tripInputForm.jsx';
import TripList from './tripList.jsx';


class CreateTrip extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
      data: [],
    };
    this.httpGetRequest = this.httpGetRequest.bind(this);
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({
        user: user.uid,
      });
      console.log(`${user.uid} uid`);
      console.log(`${this.state.user} state`);
      console.log(this.props.params.tripName);
      this.httpGetRequest();
    });
  }
  httpGetRequest() {
    console.log('user:');
    console.log(this.state.user);
    const baseUrl = `https://roadtrip-app-1474472241721.firebaseio.com/users/${this.state.user}/trips/${this.props.params.tripName}.json`;
    request.get(baseUrl)
           .then((response) => {
            console.log(response);
            const tripData = response.body;
            console.log(this.state.user);
            let tripItems = [];
            if(tripData) {
              tripItems = Object.keys(tripData).map((key) => {
                console.log(tripData);
                console.log(key);
                let indvTrip = tripData[key];
                console.log(indvTrip);
                return {
                  id:key,
                  city: indvTrip.City,
                  details: indvTrip.Details,
                  lat: indvTrip.Lat,
                  long: indvTrip.Lng,
                };
              });
            }
            console.log(tripData);
            this.setState({ data: tripItems });
           });
  }

  render() {
    return(
      <div>
        <div className="map">
            <GoogleMap
              containerProps={{
                style: {
                  height: `100%`,
                },
              }}
              defaultZoom={2}
              defaultCenter={{ lat: 40.71, lng: -74.01 }}
            >
              {
                this.state.data.map((place, idx) =>{
                  console.log(place.long);
                  return (
                    <Marker
                      position={{
                        lat: place.lat,
                        lng: place.long,
                      }}
                    />
                  );
              })
            }
            </GoogleMap>
          </div>
        <div id="editTripContent">
          <h1>
            {this.props.params.tripName}
          </h1>
          <h2>
            Edit your trip below:
          </h2>
          <div>

            <TripInputForm
              tripName={this.props.params.tripName}
              user={this.state.user}
              httpGetRequest={this.httpGetRequest}
            />
            <TripList
              tripName={this.props.params.tripName}
              user={this.state.user}
              data={this.state.data}
              httpGetRequest={this.httpGetRequest}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CreateTrip;
