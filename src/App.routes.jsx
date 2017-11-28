import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage/LandingPage';
import Dashboard from './containers/Dashboard/Dashboard';

const routes = (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact patch="/dashboard" component={Dashboard} />
  </Switch>
);

export default routes;
