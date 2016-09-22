//this will be Main component, will render all children and be main navigation
import React, { Component } from 'react';
import { Link } from 'react-router';

class Main extends Component {
  render() {
    return(
      <div id="main-nav">
        <h1>This is our main component</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/yourTrips">Your Trips</Link></li>
        </ul>
      </div>
      <div id="main"-content>

      </div>
    );
  }
}

export default Main;
