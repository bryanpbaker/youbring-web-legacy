import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchAllEvents, clearAllEvents } from '../../actions/events.actions';

class EventsList extends Component {
  componentWillMount() {
    if (this.props.user) {
      this.props.fetchAllEvents();
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('helloooo');
    console.log(nextProps);
    // only fetch events if there is a user, there are no events
    // and the incoming props don't contain events
    // otherwise you already have, or are getting events and don't need to fetch
    if (nextProps.user && !this.props.events) {
      this.props.fetchAllEvents();
    }
  }

  renderEvents() {
    return this.props.events.map((event) => {
      return <li key={event._id}><Link to={`/events/${event._id}`}>{event.name}</Link></li>
    })
  }

  componentWillUnmount() {
    this.props.clearAllEvents();
  }

  render() {
    if (this.props.events) {
      return (
        <div className="events-list">
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

export default connect(mapStateToProps, { fetchAllEvents, clearAllEvents })(EventsList);