import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginPage from './Login/LoginPage';

const routes = (
  <Switch>
    <Route path="/" component={LoginPage} />
  </Switch>
);

export default routes;
