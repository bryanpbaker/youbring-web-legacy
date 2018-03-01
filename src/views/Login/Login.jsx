import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Redirect from 'react-router-dom/Redirect';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';
import { emailAuth, authorizeUser, facebookAuth } from '../../actions/auth.actions';
import EmailLoginForm from '../../containers/EmailLoginForm/EmailLoginForm';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      isAuthorized: false,
    };

    this.authorizeUserWithEmail = this.authorizeUserWithEmail.bind(this);
    this.authorizeUserWithFacebook = this.authorizeUserWithFacebook.bind(this);
    this.toggleLoader = this.toggleLoader.bind(this);
  }

  componentWillMount() {
    // when a user navigates to this page manually,
    // check to see if this visit has been authorized
    if (this.props.isAuthorized === null) {
      // turn on the loader, we need to try and authorize the user
      this.toggleLoader();
      // try to authorize
      this.props.authorizeUser();
    } else if (this.props.isAuthorized) {
      // if the visit has been authorized, redirect to events
      this.props.history.push('/events');
    }
  }

  componentWillReceiveProps(nextProps) {
    // check new props for authorization
    if (nextProps.isAuthorized) {
      // throttle for better user experience
      setTimeout(() => {
        // use state instead of props 
        // to better control throttling
        this.setState({
          isAuthorized: true,
        }, () => {
          // turn off the loader
          this.toggleLoader();
        });
        // throttle value
      }, 1500);
    } else if (nextProps.isAuthorized === false) {
      this.toggleLoader();
    }
  }

  authorizeUserWithEmail(values) {
    this.toggleLoader();

    this.props.emailAuth(values);
  }

  authorizeUserWithFacebook(fbResponse) {
    this.toggleLoader();

    this.props.facebookAuth(fbResponse.accessToken);
  }

  toggleLoader() {
    this.setState({
      isLoading: !this.state.isLoading,
    });
  }

  render() {
    if (this.state.isAuthorized) {
      return <Redirect to="/events" />;
    }

    return (
      this.state.isLoading ? <div>Loading...</div> :
      <div className="login" style={{ paddingTop: '10%' }}>
        <Grid fluid>
          <Row>
            <Col xs={12} md={4} mdOffset={4}>
              <EmailLoginForm onSubmit={this.authorizeUserWithEmail} />
            </Col>
            <Col xs={12} md={4} mdOffset={4}>
              <h2>or</h2>
            </Col>
            <Col xs={12} md={4} mdOffset={4}>
              <FacebookLogin
                onClick={this.toggleLoader}
                appId="1013591492112556"
                callback={this.authorizeUserWithFacebook}
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthorized: state.isAuthorized,
  };
}

export default connect(mapStateToProps, { emailAuth, authorizeUser, facebookAuth })(Login);
