import React, { Component } from 'react';
import { connect } from 'react-redux';

import { authorizeUser, fetchUser } from '../../actions/auth.actions';
import { fetchEvent } from '../../actions/events.actions';

class EventDetail extends Component {
  constructor(props) {
    super(props);

    this.eventId = this.props.match.params.id;
  }

  componentWillMount() {
    this.props.fetchUser();
    this.props.authorizeUser();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user) {
      this.props.fetchEvent(nextProps.user, this.eventId);
    }
  }

  render() {
    return (
      <div className="event-detail">
        Event Detail
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps, { authorizeUser, fetchUser, fetchEvent })(EventDetail);
