import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginPage from './containers/Login/LoginPage';
import Dashboard from './containers/Dashboard/Dashboard';

const routes = (
  <Switch>
    <Route exact path="/" component={LoginPage} />
    <Route exact patch="/dashboard" component={Dashboard} />
  </Switch>
);

export default routes;
