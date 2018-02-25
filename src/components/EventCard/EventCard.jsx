import React from 'react';
import { Link } from 'react-router-dom';
import './EventCard.styles.css';

const EventCard = props => (
  <div className="event-card">
    <button className="delete-button" onClick={props.deleteEvent}>Delete</button>
    <Link to={`/events/${props.id}`}>
      <h3>{props.name}</h3>
    </Link>
    <p>{props.description}</p>
  </div>
);

export default EventCard;
