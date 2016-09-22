import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Main from '../components/main.jsx';
import Home from '../components/home.jsx';
import ExistingTrips from '../components/existingTrips.jsx';

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Home} />
        <Route path="yourTrips" component={ExistingTrips} />
      </Route>
    </Router>
  );
}

export default Routes;


//under main are all of it's children
