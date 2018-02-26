import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/PrivateRoute';

import LandingPage from './views/LandingPage/LandingPage';
import Login from './views/Login/Login';
import Dashboard from './views/Dashboard/Dashboard';
import EventDetail from './views/EventDetail/EventDetail';
import Contacts from './containers/Contacts/Contacts';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/events" component={Dashboard} />
        <PrivateRoute exact path="/events/:id" component={EventDetail} />
        <Route exact path="/contacts" component={Contacts} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
