import React from 'react';
import { Link } from 'react-router-dom';
import './EventCard.styles.css';

const EventCard = props => (
  <Link to={`/events/${props.id}`} className="event-card">
    <h3>{props.name}</h3>
    <p>{props.description}</p>
  </Link>
);

export default EventCard;
