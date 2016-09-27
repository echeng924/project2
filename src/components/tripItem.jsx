import React, { Component } from 'react';
import request from 'superagent';

const propTypes = {
  id: React.PropTypes.string,
  tripName: React.PropTypes.string,
  user: React.PropTypes.string,
  place: React.PropTypes.string,
  details: React.PropTypes.string,
  httpGetRequest: React.PropTypes.func,
};

class TripItem extends Component {
  constructor(props) {
    super(props);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }
  handleDeleteItem() {
    const baseUrl = `https://roadtrip-app-1474472241721.firebaseio.com/users/${this.props.user}/trips/${this.props.tripName}/${this.props.id}.json`;
    console.log(baseUrl);
    request.del(baseUrl)
           .then(() => {
            console.log('del clicked');
            this.props.httpGetRequest();
           });
  }

  render() {
    return (
      <div>
        <div id="trip-item">
          <h3>{this.props.place}</h3>
          <h3>{this.props.details}</h3>
        </div>
        <button onClick={this.handleDeleteItem}>Delete</button>
      </div>
    );
  }
}

export default TripItem;
