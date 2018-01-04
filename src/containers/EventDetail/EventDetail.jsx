import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import DashboardHeader from './../../components/DashboardHeader/DashboardHeader';

import { authorizeUser, logout } from '../../actions/auth.actions';
import { fetchEvent, clearActiveEvent } from '../../actions/events.actions';

class EventDetail extends Component {
  constructor(props) {
    super(props);

    this.eventId = this.props.match.params.id;
  }

  componentWillMount() {
    if (!this.props.user) {
      this.props.authorizeUser();
    }

    if (this.props.user) {
      this.props.fetchEvent(this.props.user, this.eventId);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user && !nextProps.activeEvent) {
      this.props.fetchEvent(nextProps.user, this.eventId);
    }
  }

  componentWillUnmount() {
    this.props.clearActiveEvent();
  }

  render() {
    if (!this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }

    if (this.props.activeEvent) {
      const { name, date, description } = this.props.activeEvent;

      return (
        <div className="event-detail">
          <DashboardHeader
            logout={this.props.logout}
          />
          <Grid fluid>
            <Row>
              <Col xs={12}>
                <h1>{name}</h1>
                <h3>{date}</h3>
                <p>{description}</p>
              </Col>
            </Row>
          </Grid>
        </div>
      );
    }

    return (
      <div className="event-detail-loading">
        <DashboardHeader
          logout={this.props.logout}
        />
        loading...
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    isAuthenticated: state.isAuthenticated,
    activeEvent: state.activeEvent,
  };
}

export default connect(mapStateToProps, { authorizeUser, fetchEvent, clearActiveEvent, logout })(EventDetail);
