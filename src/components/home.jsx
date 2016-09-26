//this might hold link to register/login page

import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
  render() {
    return(
      <div id="homeContent">
        <h1 id="homeTitle">Welcome!</h1>
        <div id="homeBtn">
          <Link to="/createTrip" id="homeLink">Start planning your new trip</Link>
        </div>
      </div>
    );
  }
}

export default Home;
