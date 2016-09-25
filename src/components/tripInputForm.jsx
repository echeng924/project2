//TripInputForm will be a form that will send data to database.

import React, { Component } from 'react';

// const propTypes = {

// };

class TripInputForm extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h2>Displays trip name above form</h2>
        <form id="trip-form">
          <div>
            Destination:
            <input
              name="destination"
              type="text"
              placeholder="City, State"
            />
          </div>
          <div>
            Where you want to go:
            <textarea
              name="dest-details"
              type="text"
              placeholder="Specific places to visit"
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
