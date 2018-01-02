import React from 'react';
import { Button } from 'react-bootstrap';
import EventCard from '../EventCard/EventCard';

import './Events.styles.css';

const Events = (props) => {
  const renderEvents = () => {
    return props.events.map((event) => {
      return <EventCard key={event._id} id={event._id} name={event.name} description={event.description} />;
    });
  };

  if (props.events.length) {
    return (
      <div className="events">
        <Button bsStyle="primary" bsSize="large" onClick={props.toggleCreateEventModal}>Create a New Event</Button>
        <ul className="event-list">
          {renderEvents()}
        </ul>
      </div>
    );
  }

  return (
    <div className="events">
      No Events! <a onClick={props.toggleCreateEventModal}>Click here</a> to create one.
    </div>
  );
};

export default Events;
