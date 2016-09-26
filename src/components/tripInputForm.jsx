//TripInputForm will be a form that will send data to database.

import React, { Component } from 'react';
import request from 'superagent';

const propTypes = {
  tripName: React.PropTypes.string,
  user: React.PropTypes.string,
  httpGetRequest: React.PropTypes.func,
};

class TripInputForm extends Component {
  constructor() {
    super();
    this.state = {
      city:'',
      details: '',
    }
    this.handleInputUpdate = this.handleInputUpdate.bind(this);
    this.updateTrip = this.updateTrip.bind(this);
    this.handleTripSubmit = this.handleTripSubmit.bind(this);
    // this.props.httpGetRequest = this.props.httpGetRequest.bind(this);
  }
  handleInputUpdate(e) {
    const stateObj = {};
    const stateKey = e.target.name;
    stateObj[stateKey] = e.target.value;
    this.setState(stateObj);
  }
  updateTrip() {
  const baseUrl=`https://roadtrip-app-1474472241721.firebaseio.com/users/${this.props.user}/trips/${this.props.tripName}.json`;
  request.post(baseUrl)
         .send({
          City: this.state.city,
          Details: this.state.details,
         })
         .then(() => {
            this.props.httpGetRequest();
         })
  }
  handleTripSubmit(e) {
    console.log('new item submitted');
    e.preventDefault();
    this.updateTrip();
    this.setState({
      city:'',
      details: '',
    })
  }
  render() {
    return (
      <div>
        <h2>Displays trip name above form</h2>
        <form id="trip-form" onSubmit={this.handleTripSubmit}>
          <div>
            Destination:
            <input
              name="city"
              type="text"
              placeholder="City, State"
              onChange={this.handleInputUpdate}
            />
          </div>
          <div>
            Where you want to go:
            <textarea
              name="details"
              type="text"
              placeholder="Specific places to visit"
              onChange={this.handleInputUpdate}
            />
            <input
              type="submit"
              name="trip-submit"
              value="Submit!"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default TripInputForm;
