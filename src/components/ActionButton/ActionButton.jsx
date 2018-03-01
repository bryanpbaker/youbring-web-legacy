import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Button } from 'react-bootstrap';
import './ActionButton.css';

const ActionButton = (props) => {
  return (
    <Button className="action-button" bsStyle={props.color}>
      <FontAwesome
        name={props.icon}
        size="2x"
      />
      <span className="title">
        {props.title}
      </span>
    </Button>
  );
};

export default ActionButton;