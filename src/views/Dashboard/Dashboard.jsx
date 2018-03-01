import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { authorizeUser } from '../../actions/auth.actions';
import AppNavbar from '../../containers/AppNavbar/AppNavbar';
import TitleSection from '../../components/TitleSection/TitleSection';
import EventsList from '../../containers/EventsList/EventsList';

const Dashboard = () => (
  <div className="dashboard">
    <AppNavbar />
    <TitleSection
      title="Dashboard"
      actions={[
        {
          title: 'Create New Event',
          icon: 'plus-circle',
          color: 'accent',
        },
      ]}
    />
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
