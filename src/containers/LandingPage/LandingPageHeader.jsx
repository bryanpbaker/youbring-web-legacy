import React from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './LandingPageHeader.styles.css';

const LandingPageHeader = props => (
  <Navbar fluid collapseOnSelect className="landing-page-header">
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">YouBring</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      {props.isAuthenticated &&
        <Nav pullRight>
          <LinkContainer to="/events">
            <NavItem className="btn btn-primary">Log In</NavItem>
          </LinkContainer>
        </Nav>
      }
      {!props.isAuthenticated &&
        <Nav pullRight>
          <NavItem className="btn btn-primary" onClick={props.toggleLogin}>Log In</NavItem>
          <NavItem className="btn btn-success" onClick={props.toggleSignup}>Sign Up</NavItem>
        </Nav>
      }
    </Navbar.Collapse>
  </Navbar>
);

export default LandingPageHeader;
