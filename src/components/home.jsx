//this might hold link to register/login page

import React, { Component } from 'react';
import { Link } from 'react-router';
import { GoogleMap } from 'react-google-maps';

class Home extends Component {
  render() {
    return(
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
        <div id="homeContent">
          <h1 id="homeTitle">Welcome!</h1>
          <div id="homeBtn">
            <Link to="/createTrip" id="homeLink">Start planning your new trip</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
