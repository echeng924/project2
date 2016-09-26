//TripList will render list display of trip items

import React, { Component } from 'react';
import TripItem from './tripItem.jsx';

const propTypes = {
  data: React.PropTypes.array,
  user: React.PropTypes.string,
  tripName: React.PropTypes.string,
  httpGetRequest: React.PropTypes.func,
}

class TripList extends Component {
  render() {
    const tripElements = this.props.data.map((el, id) => {
      console.log(el.id);
      return (
        <div key={id} id="trip-list">
          <TripItem
            id = {el.id}
            place = {el.city}
            details = {el.details}
            user= {this.props.user}
            tripName = {this.props.tripName}
            httpGetRequest = {this.props.httpGetRequest}
          />
        </div>
      )
    })
    return (
      <div>
        {tripElements}
      </div>
    )
  }
}

export default TripList;
