//TripList will render list display of trip items

import React, { Component } from 'react';
import TripItem from './tripItem.jsx';

const propTypes = {
  data: React.PropTypes.array,
  httpGetRequest: React.PropTypes.func,
}

class TripList extends Component {
  render() {
    const tripElements = this.props.data.map((el, id) => {
      console.log(el);
      return (
        <div id="trip-list">
          <TripItem
            id = {el.id}
            place = {el.city}
            details = {el.details}
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
