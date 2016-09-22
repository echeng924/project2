//this will be Main component, will render all children and be main navigation
import React, { Component } from 'react';
import { Link } from 'react-router';
import firebase from '../../firebase.config.js';

const propTypes = {
  children: React.PropTypes.element,
}

class Main extends Component {
  render() {
    return(
      <div>
        <div id="main-nav">
          <h1>This is our main component</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/yourTrips">Your Trips</Link></li>
            <li><Link to="/createTrip">Create a new trip</Link></li>
          </ul>
        </div>
        <div id="main-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

Main.propTypes = propTypes;

export default Main;
