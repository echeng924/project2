//this component will be main App which will hold trip input form and trip list

import React, { Component } from 'react';
import { withRouter } from 'react-router';
import request from 'superagent';
import { GoogleMap } from 'react-google-maps';
import firebase from '../../firebase.config.js';

class CreateTrip extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
      tripName: '',
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.newNameSubmit = this.newNameSubmit.bind(this);
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({
        user: user.uid,
      });
    });
  }
  handleEdit(e) {
    const stateObj = {};
    const stateKey = e.target.name;
    stateObj[stateKey] = e.target.value;
    this.setState(stateObj);
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log('name submitted');
    this.props.router.push(`/editTrip/${this.state.tripName}`);
    this.newNameSubmit();
  }
  newNameSubmit() {
    const baseUrl = `https://roadtrip-app-1474472241721.firebaseio.com/users/${this.state.user}/trips.json`;
    request.patch(baseUrl)
           .send({ [this.state.tripName]: 0 })
           .then(() => {
              this.props.router.push(`/editTrip/${this.state.tripName}`);
           });
  }
  render() {
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
        <div className="createTripContent">
          <h1 id="createTripTitle">
            Enter a name to create a new trip:
          </h1>
          <div>
            <form name="tripNameForm" onSubmit={this.handleSubmit}>
              Trip name:
              <div id="newTripInput">
              <input name="tripName" type="text" onChange={this.handleEdit} />
              </div>
              <div id="createBtn">
              <input type="submit" name="name-submit" value="Submit!" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CreateTrip);
