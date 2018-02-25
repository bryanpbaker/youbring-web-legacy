import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import LandingPage from './views/LandingPage/LandingPage';
import Dashboard from './views/Dashboard/Dashboard';
import Events from './containers/Events/Events';
import EventDetail from './containers/EventDetail/EventDetail';
import Contacts from './containers/Contacts/Contacts';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/events" component={Dashboard} />
        <Route exact path="/events/:id" component={EventDetail} />
        <Route exact path="/contacts" component={Contacts} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
