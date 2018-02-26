import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllEvents } from '../../actions/events.actions';

class EventsList extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.user && !this.props.events) {
      this.props.fetchAllEvents();
    }
  }

  renderEvents() {
    return this.props.events.map((event) => {
      return <li key={event._id}><Link to={`events/${event._id}`}>{event.name}</Link></li>
    })
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
        Loading...
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    events: state.events,
    user: state.user,
  };
}

export default connect(mapStateToProps, { fetchAllEvents })(EventsList);