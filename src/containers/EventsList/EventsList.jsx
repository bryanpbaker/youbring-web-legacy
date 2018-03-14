import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { fetchAllEvents, clearAllEvents, deleteEvent } from '../../actions/events.actions';

import EventCard from '../../components/EventCard/EventCard';

class EventsList extends Component {
  constructor() {
    super();

    this.state = {
      fetchActionCalled: false,
    };

    this.fetchEvents = this.fetchEvents.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.state.fetchActionCalled && nextProps.user && !this.props.events) {
      this.fetchEvents();
    }
  }

  componentWillUnmount() {
    this.props.clearAllEvents();

    this.setState({
      fetchActionCalled: false,
    });
  }

  fetchEvents() {
    this.props.fetchAllEvents();

    this.setState({
      fetchActionCalled: true,
    });
  }

  deleteEvent(eventId) {
    confirmAlert({
      title: 'Delete Event',
      message: 'Are you sure?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.props.deleteEvent(eventId)
        },
        {
          label: 'No',
        },
      ],
    });
  }

  renderEvents() {
    return this.props.events.map((event) => {
      const date = <Moment format="MM/DD/YYYY" date={event.date} />;

      return (
        <EventCard 
          key={event._id} 
          name={event.name} 
          path={`/events/${event._id}`} 
          date={date} 
          deleteEvent={() => this.deleteEvent(event._id)}
        />
      );
    });
  }

  render() {
    if (this.props.events) {
      return (
        <div className="events-list" style={{ marginLeft: '-15px', marginRight: '-15px' }} >
          {this.renderEvents()}
        </div>
      );
    }

    return (
      <div className="loading">
        Loading list...
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    events: state.events,
    user: state.user,
    isAuthorized: state.isAuthorized,
  };
}

export default connect(mapStateToProps, { fetchAllEvents, clearAllEvents, deleteEvent })(EventsList);