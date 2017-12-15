import React, { Component } from 'react';
import { Jumbotron, Grid, Row, Col, Button } from 'react-bootstrap';
import './LandingPage.styles.css';

import LandingPageHeader from './LandingPageHeader';
import Login from '../../containers/Login/Login';
import Signup from '../Signup/Signup';


class LandingPage extends Component {
  constructor() {
    super();

    this.state = {
      loginIsShowing: false,
      signupIsShowing: false,
    };

    this.toggleLogin = this.toggleLogin.bind(this);
    this.toggleSignup = this.toggleSignup.bind(this);
  }

  toggleLogin() {
    this.setState({
      loginIsShowing: !this.state.loginIsShowing,
      signupIsShowing: false,
    });
  }

  toggleSignup() {
    this.setState({
      signupIsShowing: !this.state.signupIsShowing,
      loginIsShowing: false,
    });
  }

  render() {
    return (
      <div className="landing-page">
        <LandingPageHeader
          toggleLogin={this.toggleLogin}
          toggleSignup={this.toggleSignup}
        />
        <Jumbotron>
          <Grid fluid>
            <Row>
              <Col xs={12}>
                <h1>Welcome to YouBring!</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis quo nisi veniam eius eligendi!</p>
                <p><Button bsStyle="success">Learn more</Button></p>
              </Col>
            </Row>
          </Grid>
        </Jumbotron>
        <Grid fluid>
          <Row>
            <Col xs={12}>
              <h2 className="subheading">
                Lorem, ipsum dolor.
              </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <hr/>
              <h1>Heading 1</h1>
              <h2>Heading 2</h2>
              <h3>Heading 3</h3>
            </Col>
          </Row>
        </Grid>
        <Login
          show={this.state.loginIsShowing}
          toggle={this.toggleLogin}
        />
        <Signup
          show={this.state.signupIsShowing}
          toggle={this.toggleSignup}
        />
      </div>
    );
  }
}

export default LandingPage;
