import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import './EventCard.css';

const EventCard = props => (
  <Col xs={12} sm={6} md={3} className="event-card-container">
    <div className="event-card">
      <button className="delete-button" onClick={props.deleteEvent}>
        <FontAwesome
          name="trash"
        />
      </button>
      <Link className="event-name" to={props.path}>{props.name}</Link>
      <p>{props.date}</p>
      <Link className="view-more" to={props.path}>View Details</Link>
    </div>
  </Col>
);

EventCard.propTypes = {
  deleteEvent: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired,
};

export default EventCard;
