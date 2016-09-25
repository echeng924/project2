import React, { Component } from 'react';

const propTypes = {
  id: React.PropTypes.string,
  place: React.PropTypes.string,
  details: React.PropTypes.string,
  httpGetRequest: React.PropTypes.func,
}

class TripItem extends Component {
  constructor(props) {
    super(props);
  }
  handleDeleteItem() {
  const baseUrl=`https://roadtrip-app-1474472241721.firebaseio.com/users/${this.state.user}/trips/${this.props.params.tripName}.json`;

  }

  render() {
    return (
      <div id="trip-item">
        <h3>{this.props.place}</h3>
        <h3>{this.props.details}</h3>
      </div>
    );
  }
}

export default TripItem;
