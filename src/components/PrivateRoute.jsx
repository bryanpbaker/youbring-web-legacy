import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { authorizeUser } from '../actions/auth.actions';

class PrivateRoute extends Component {
  componentWillMount() {
    this.props.authorizeUser();
  }

  componentWillUpdate(nextProps) {
    if (nextProps.location !== this.props.location) {
      this.props.authorizeUser();
    }
  }

  render() {
    const { component: ParamComponent, ...rest } = this.props;

    if (this.props.isAuthorized === null) {
      return <div className="loading">Authorizing...</div>
    }

    return (
      <Route
        {...rest}
        render={props => (
          this.props.isAuthorized
          ? <ParamComponent {...props} />
          : <Redirect to="/login" />
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