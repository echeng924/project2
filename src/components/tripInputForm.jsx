//TripInputForm will be a form that will send data to database.

import React, { Component } from 'react';
import request from 'superagent';
import Geosuggest from 'react-geosuggest';

const propTypes = {
  tripName: React.PropTypes.string,
  user: React.PropTypes.string,
  httpGetRequest: React.PropTypes.func,
};

class TripInputForm extends Component {
  constructor() {
    super();
    this.state = {
      city: '',
      details: '',
      lat: '',
      long: '',
    };
    this.handleInputUpdate = this.handleInputUpdate.bind(this);
    this.updateTrip = this.updateTrip.bind(this);
    this.handleTripSubmit = this.handleTripSubmit.bind(this);
    this.onSuggestSelect = this.onSuggestSelect.bind(this);
    // this.props.httpGetRequest = this.props.httpGetRequest.bind(this);
  }
  handleInputUpdate(e) {
    const stateObj = {};
    const stateKey = e.target.name;
    stateObj[stateKey] = e.target.value;
    this.setState(stateObj);
  }
  updateTrip() {
  const baseUrl = `https://roadtrip-app-1474472241721.firebaseio.com/users/${this.props.user}/trips/${this.props.tripName}.json`;
  request.post(baseUrl)
         .send({
          City: this.state.city,
          Details: this.state.details,
          Lat: this.state.lat,
          Lng: this.state.long,
         })
         .then(() => {
            this.props.httpGetRequest();
         });
  }
  handleTripSubmit(e) {
    console.log('new item submitted');
    e.preventDefault();
    this.updateTrip();
    this.setState({
      city: '',
      details: '',
    });
  }
  onSuggestSelect(suggest) {
    console.log(suggest);
    this.setState({
      city: suggest.label,
      lat: suggest.location.lat,
      long: suggest.location.lng,
    });
  }
  render() {
    return (
      <div>
        <form id="trip-form" onSubmit={this.handleTripSubmit}>
          <div id="destinationInput">
            <span className="destination">Destination:</span>
            <Geosuggest
              placeholder="Type a city"
              onSuggestSelect={this.onSuggestSelect}
            />
          </div>
          <div id="detailsInput">
            Where you want to go:
            <textarea
              name="details"
              type="text"
              value={this.state.details}
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
