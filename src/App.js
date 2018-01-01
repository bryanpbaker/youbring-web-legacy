import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import { authorizeUser } from './actions/auth.actions';

import LandingPage from './containers/LandingPage/LandingPage';
import Dashboard from './containers/Dashboard/Dashboard';
import EventDetail from './containers/EventDetail/EventDetail';

class App extends Component {
  componentWillMount() {
    this.authorizeUser();
  }

  authorizeUser() {
    this.props.authorizeUser();
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/events/:id" component={EventDetail} />
        </Switch>
      </BrowserRouter>
    );
  }
};

function mapStateToProps(state) {
  return {
    isAuthenticated: state.isAuthenticated,
  };
}

export default connect(mapStateToProps, { authorizeUser })(App);
