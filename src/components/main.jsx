//this will be Main component, will render all children and be main navigation
import React, { Component } from 'react';
import { Link } from 'react-router';
import firebase from '../../firebase.config.js';

const propTypes = {
  children: React.PropTypes.element,
};

class Main extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
    };
    this.signOut = this.signOut.bind(this);
  }
  componentWillMount() {
    setTimeout(() => {
      firebase.auth().onAuthStateChanged((user) => {
        this.setState({
          loggedIn: (user !== null),
        });
      });
    }, 200);
  }
  signOut() {
    firebase.auth()
            .signOut()
            .then(() => {
              console.log('user signed out');
            });
  }
  loggedInLinks() {
    if (!this.state.loggedIn) {
      return (
        <span>
          <li><Link to="/login" id="yourTrips">Your Trips</Link></li>
          <li><Link to="/login" id="createTrip">Create a new trip</Link></li>
          <li><Link to="/login" id="login">Login /</Link>
            <Link to="/register" id="register"> Register</Link></li>
        </span>
      );
    } else {
      return (
        <span id="sign-out">
          <li><Link to="/yourTrips" id="yourTrips">Your Trips</Link></li>
          <li><Link to="/createTrip" id="createTrip">Create a new trip</Link></li>
          <li><Link to="/" onClick={this.signOut}>Sign Out</Link></li>
        </span>
      );
    }
  }
  render() {
    return (
      <div id="main">
        <div id="main-nav">
          <h1 id="mainTitle">RoadTrips</h1>
          <ul id="home-link">
            <li><Link to="/">Home</Link></li>
            {
              this.loggedInLinks()
            }

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
