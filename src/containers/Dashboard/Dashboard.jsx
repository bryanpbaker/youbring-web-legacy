import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';

import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';
import Events from '../../components/Events/Events';
import CreateEvent from '../CreateEvent/CreateEvent';

import { fetchUser, authorizeUser, logout } from '../../actions/auth.actions';

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
    this.props.fetchUser();
  }

  componentWillReceiveProps(nextProps) {
    console.log('next props', nextProps.user);
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
        <div className="dashboard">
          <DashboardHeader
            logout={this.logout}
          />
          <Grid fluid>
            <Row>
              <Col xs={12}>
                <h1>Hello { this.props.user.profile.first_name}!</h1>
                <p>Welcome to YouBring</p>
              </Col>
              <Col xs={12}>
                <Events
                  events={this.props.user.profile.events}
                  toggleCreateEventModal={this.toggleCreateEventModal}
                />
              </Col>
            </Row>
          </Grid>
          <CreateEvent
            modalIsOpen={this.state.createEventModalOpen}
            toggleModal={this.toggleCreateEventModal}
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
  fetchUser, authorizeUser, logout,
})(Dashboard);
