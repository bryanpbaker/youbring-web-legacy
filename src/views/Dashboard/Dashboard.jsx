import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { authorizeUser } from '../../actions/auth.actions';
import AppNavbar from '../../containers/AppNavbar/AppNavbar';
import EventsList from '../../containers/EventsList/EventsList';

const Dashboard = () => (
  <div className="dashboard">
    <AppNavbar />
    Dashboard!
    <div>
      <Link to="/">Landing Page</Link>
    </div>
    <Grid fluid>
      <Row>
        <Col xs={12}>
          <EventsList />
        </Col>
      </Row>
    </Grid>
  </div>
);

export default Dashboard;
