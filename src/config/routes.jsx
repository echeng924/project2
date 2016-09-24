import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Main from '../components/main.jsx';
import Home from '../components/home.jsx';
import ExistingTrips from '../components/existingTrips.jsx';
import CreateTrip from '../components/createTrip.jsx';
import Login from '../components/login.jsx';
import Register from '../components/register.jsx';

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Home} />
        <Route path="yourTrips" component={ExistingTrips} />
        <Route path="createTrip" component={CreateTrip} />
        <Route path="login" component={Login} />
        <Route path="register" component={Register} />
      </Route>
    </Router>
  );
}

export default Routes;

//add :uid as route params for login and register
//under main are all of it's children
