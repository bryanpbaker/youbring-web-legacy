import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';

import './EventCard.css';

const EventCard = props => (
  <Col xs={12} sm={6} md={3} className="event-card-container">
    <div className="event-card">
      <Link className="event-name" to={props.path}>{props.name}</Link>
      <p>{props.date}</p>
      <Link className="view-more" to={props.path}>View Details</Link>
    </div>
  </Col>
);

export default EventCard;