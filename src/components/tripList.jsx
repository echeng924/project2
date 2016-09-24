//TripList will render list display of trip items

import React, { Component } from 'react';
import TripItem from './tripItem.jsx';

class TripList extends Component {
  render() {
    return (
      <div id="trip-list">
        <h1>Where the list will be</h1>
        <div>
          <TripItem />
        </div>
      </div>
    );
  }
}

export default TripList;
