import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import AppNavbar from '../../containers/AppNavbar/AppNavbar';
import EventsList from '../../containers/EventsList/EventsList';
import './Dashboard.styles.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <AppNavbar />
      <Grid fluid>
        <Row className="title-section">
          <Col xs={12}>    
            <h1>Dashboard</h1>
            <div className="actions pull-right">
              <Button className="action-button" bsStyle="primary">
                <FontAwesome
                  name="plus-circle"
                  size="2x"
                />
                <span className="title">Create New Event</span>
              </Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <EventsList />
          </Col>
        </Row>
      </Grid>
    </div>
  )
};

export default Dashboard;
