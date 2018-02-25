import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import AppNavbar from '../AppNavbar/AppNavbar';
import EventsList from '../../components/EventsList/EventsList';
import CreateEvent from '../../components/CreateEvent/CreateEvent';

import { authorizeUser, logout } from '../../actions/auth.actions';
import { createEvent, deleteEvent } from '../../actions/events.actions';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      createEventModalOpen: false,
    };

    this.logout = this.logout.bind(this);
    this.toggleCreateEventModal = this.toggleCreateEventModal.bind(this);
  }

  componentWillMount() {
    this.props.authorizeUser();
  }

  logout() {
    this.props.logout();
  }

  toggleCreateEventModal() {
    this.setState({
      createEventModalOpen: !this.state.createEventModalOpen,
    });
  }

  render() {
    if (this.props.isAuthenticated && this.props.user) {
      return (
        <div className="events">
          <AppNavbar />
          <Grid fluid>
            <Row>
              <Col xs={12}>
                <h1>Hello { this.props.user.profile.firstName}!</h1>
                <p>Welcome to YouBring</p>
              </Col>
              <Col xs={12}>
                <EventsList
                  events={this.props.user.profile.events}
                  toggleCreateEventModal={this.toggleCreateEventModal}
                  user={this.props.user}
                  deleteEvent={this.props.deleteEvent}
                />
              </Col>
            </Row>
          </Grid>
          <CreateEvent
            modalIsOpen={this.state.createEventModalOpen}
            toggleModal={this.toggleCreateEventModal}
            user={this.props.user}
            createEvent={this.props.createEvent}
          />
        </div>
      );
    }

    if (this.props.isAuthenticated === false) {
      return <Redirect to="/" />;
    }

    return (
      <div className="dashboard-loading">
        loading...
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    user: state.user,
    isAuthenticated: state.isAuthenticated,
  };
}

export default connect(mapStateToProps, {
  authorizeUser, logout, createEvent, deleteEvent
})(Dashboard);