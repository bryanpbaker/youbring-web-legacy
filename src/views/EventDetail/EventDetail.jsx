import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import AppNavbar from '../../containers/AppNavbar/AppNavbar';
import EditEventForm from '../../containers/EditEventForm/EditEventForm';

import { authorizeUser, logout } from '../../actions/auth.actions';
import { fetchEvent, clearActiveEvent, updateEvent, deleteEvent } from '../../actions/events.actions';

class EventDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false
    }

    this.eventId = this.props.match.params.id;

    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.updateEvent = this.updateEvent.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
  }

  componentWillMount() {
    if (!this.props.user) {
      this.props.authorizeUser();
    }

    if (this.props.user) {
      console.log('request');
      this.props.fetchEvent(this.props.user, this.eventId);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props && this.props.user && !this.props.activeEvent && !nextProps.activeEvent) {
      console.log('request');
      console.log('this', this.props);
      console.log('next', nextProps);
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

  toggleEditMode() {
    this.setState({
      editMode: !this.state.editMode
    });
  }

  updateEvent(values) {
    this.props.updateEvent(this.props.user, this.props.activeEvent._id, values);
  }

  deleteEvent() {
    this.props.deleteEvent(this.props.user, this.props.activeEvent._id);

    setTimeout(() => {
      this.props.history.push('/events');
    }, 500);
  }

  render() {
    if (this.props.activeEvent) {
      const { name, date, description, location, time, _id } = this.props.activeEvent;

      return (
        <div className="event-detail">
          <AppNavbar />
          <Grid fluid>
            <Row>
              <Col xs={12}>
                <button onClick={this.deleteEvent} className="delete-button">Delete</button>
                <button onClick={this.toggleEditMode} className="edit-button">Edit</button>
                {
                  !this.state.editMode &&
                  <div>
                    <h1>{name}</h1>
                    <h3>{date}</h3>
                    <p>{description}</p>
                    <p>{location}</p>
                    <p>{time}</p>
                    <ul>
                      {this.renderItems()}
                    </ul>
                    <ul>
                      {this.renderInvitees()}
                    </ul>
                  </div>
                }
                {
                  this.state.editMode &&
                  <div>
                    <h1>Edit</h1>
                    <EditEventForm passEventValues={this.updateEvent} activeEvent={this.props.activeEvent} />
                  </div>
                }
              </Col>
            </Row>
          </Grid>
        </div>
      );
    }

    if (this.props.isAuthorized === false) {
      return <Redirect to="/" />;
    }

    return (
      <div className="event-detail-loading">
        <AppNavbar />
        Loading Details...
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    isAuthorized: state.isAuthorized,
    activeEvent: state.activeEvent,
  };
}

export default connect(mapStateToProps, {
  authorizeUser, fetchEvent, clearActiveEvent, logout, updateEvent, deleteEvent,
})(EventDetail);
