import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './containers/Login/Login';
import Dashboard from './containers/Dashboard/Dashboard';

const routes = (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact patch="/dashboard" component={Dashboard} />
  </Switch>
);

export default routes;
