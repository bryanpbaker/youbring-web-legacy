import React from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Glyphicon } from 'react-bootstrap';
import CreateUser from '../../containers/CreateUser/CreateUser';
import './Signup.styles.css';

const Signup = (props) => {
  if (props.isAuthenticated && props.show) {
    return <Redirect to="/events" />;
  }

  return (
    <div className={`signup ${props.show ? 'show' : ''}`}>
      <Button className="close-button" onClick={props.toggle}>
        <Glyphicon glyph="remove" />
      </Button>
      <CreateUser />
    </div>
  );
};
export default Signup;
