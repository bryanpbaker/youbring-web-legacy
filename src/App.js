import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import { authorizeUser } from './actions/auth.actions';

import LandingPage from './components/LandingPage/LandingPage';
import Dashboard from './containers/Dashboard/Dashboard';

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
        </Switch>
      </BrowserRouter>
    );
  }
};

function mapStateToProps(state) {
  return {
    isAuthorized: state.isAuthorized,
  };
}

export default connect(mapStateToProps, { authorizeUser })(App);
