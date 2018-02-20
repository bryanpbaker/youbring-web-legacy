import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import AppNavbar from '../AppNavbar/AppNavbar';

import { authorizeUser, logout } from '../../actions/auth.actions';
import { fetchEvent, clearActiveEvent } from '../../actions/events.actions';

class EventDetail extends Component {
  constructor(props) {
    super(props);

    this.eventId = this.props.match.params.id;

    this.invitees = ['jim', 'fred', 'bob']
  }

  componentWillMount() {
    console.log(this.props.user);

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

  renderItems() {
    return this.props.activeEvent.items.map((item) => {
      return <li key={item}>{item}</li>
    })
  }

  renderInvitees() {
    return this.props.activeEvent.invitees.map((invitee) => {
      return <li key={invitee}>{invitee}</li>
    })
  }

  render() {
    if (this.props.activeEvent) {
      const { name, date, description } = this.props.activeEvent;

      return (
        <div className="event-detail">
          <AppNavbar />
          <Grid fluid>
            <Row>
              <Col xs={12}>
                <h1>{name}</h1>
                <h3>{date}</h3>
                <p>{description}</p>
                <ul>
                  {this.renderItems()}
                </ul>
                <ul>
                  {this.renderInvitees()}
                </ul>
              </Col>
            </Row>
          </Grid>
        </div>
      );
    }

    if (this.props.isAuthenticated === false) {
      return <Redirect to="/" />;
    }

    return (
      <div className="event-detail-loading">
        <AppNavbar />
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
