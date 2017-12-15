import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import CreateUser from '../../containers/CreateUser/CreateUser';
import './Signup.styles.css';

const Signup = props => (
  <div className={`signup ${props.show ? 'show' : ''}`}>
    <Button className="close-button" onClick={props.toggle}>
      <Glyphicon glyph="remove" />
    </Button>
    <CreateUser />
  </div>
);

export default Signup;
