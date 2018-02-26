import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { emailAuth, authorizeUser } from '../../actions/auth.actions';
import EmailLogin from '../../containers/EmailLogin/EmailLogin';
import Redirect from 'react-router-dom/Redirect';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      isAuthorized: false,
    };

    this.authorizeUserWithEmail = this.authorizeUserWithEmail.bind(this);
  }

  componentWillMount() {
    // when a user navigates to this page manually,
    // check to see if this visit has been authorized
    if (this.props.isAuthorized === null) {
      // turn on the loader, we need to try and authorize the user
      this.setState({
        isLoading: true,
      });
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
          this.setState({
            isLoading: false,
          });
        });
        // throttle value
      }, 1500);
    }
  }

  authorizeUserWithEmail(values) {
    this.setState({
      isLoading: true,
    });

    this.props.emailAuth(values);
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
              <EmailLogin onSubmit={this.authorizeUserWithEmail} />
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

export default connect(mapStateToProps, { emailAuth, authorizeUser })(Login);
