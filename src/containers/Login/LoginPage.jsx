import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';
// import action creators
import { fetchUser, facebookAuth } from '../../actions/auth.actions';

class LoginPage extends Component {
  constructor(props) {
    super(props);

    // bind context
    this.apiAuth = this.apiAuth.bind(this);
  }

  componentWillMount() {
    // check if there is already a user logged in
    this.props.fetchUser();
  }

  /**
   * gets an access code from fb to authenticate with our API
   * @param {Object} facebook user object 
   */
  apiAuth(fbResponse) {
    // call the facebook auth action creator with the user's access token
    this.props.facebookAuth(fbResponse.accessToken);
  }

  render() {
    // if there is a user, redirect to the dashboard
    if (this.props.user) {
      return <Redirect to="/dashboard" />
    }

    // if there is no user, show the login UI
    return (
      <div className="login-page">
        Login Page
        <FacebookLogin
          appId="1013591492112556"
          callback={this.apiAuth}
        />
      </div>
    );
  }
}

// map user from store to props
function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps, { facebookAuth, fetchUser })(LoginPage);
