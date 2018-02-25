import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { authorizeUser } from '../actions/auth.actions';

class PrivateRoute extends Component {
  constructor(props) {
    super(props);

    this.Component = this.props.component;
  }

  componentWillMount() {
    this.props.authorizeUser();
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps);
  }

  render() {
    if (this.props.isAuthorized === null) {
      return <div>Loading...</div>;
    }

    return (
      <Route 
        exact={this.props.exact}
        path={this.props.path}
        render={props => (
          false === true ? <this.Component {...this.props} /> : <Redirect to="/login" />
        )}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthorized: state.isAuthorized,
  };
}

export default connect(mapStateToProps, { authorizeUser })(PrivateRoute);