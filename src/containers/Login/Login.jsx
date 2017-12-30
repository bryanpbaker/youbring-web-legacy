import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';
import { Button, Glyphicon } from 'react-bootstrap';
import Loader from '../../components/Loader/Loader';
// import action creators
import { fetchUser, facebookAuth, emailAuth } from '../../actions/auth.actions';
// import components
import EmailLogin from './EmailLogin/EmailLogin';

import './Login.styles.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    };

    // bind methods to this
    this.apiAuth = this.apiAuth.bind(this);
    this.emailAuth = this.emailAuth.bind(this);
    this.showLoader = this.showLoader.bind(this);
  }

  componentWillMount() {
    // check if there is already a user logged in
    this.props.fetchUser();
  }

  componentWillReceiveProps(nextProps) {
    // if there are auth errors, hide the loader
    if (nextProps.errors.authErrors) {
      this.setState({
        loading: false,
      });
    }
  }

  // show a loader when a process is loading
  showLoader() {
    this.setState({
      loading: true,
    });
  }

  // try to authenticate the user with their credentials
  emailAuth(values) {
    this.showLoader();
    this.props.emailAuth(values);
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
    // if there is no user, show the login UI
    return (
      <div className={`login ${this.props.show ? 'show' : ''}`}>
        <Loader loading={this.state.loading} />
        <Button className="close-button" onClick={this.props.toggle}>
          <Glyphicon glyph="remove" />
        </Button>
        <FacebookLogin
          onClick={this.showLoader}
          appId="1013591492112556"
          callback={this.apiAuth}
        />
        <div>
          <b style={{ display: 'block', marginTop: '20px', fontSize: '18px' }}>
            -OR -
          </b>
        </div>
        <EmailLogin authErrors={this.props.errors.authErrors} onSubmit={this.emailAuth} />
      </div>
    );
  }
}

// map user from store to props
function mapStateToProps(state) {
  return {
    user: state.user,
    errors: state.errors,
  };
}

export default connect(mapStateToProps, { facebookAuth, fetchUser, emailAuth })(Login);
