import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, MenuItem, NavDropdown, NavItem, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';
import { logout, authorizeUser } from '../../actions/auth.actions';
import './AppNavbar.css';

const AppNavbar = (props) => {
  return (
    <header className="app-navbar">
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">YouBring</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          {/* <Nav>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav> */}
          <Nav pullRight>
            <LinkContainer to="/events">
              <NavItem eventKey={1}>Events</NavItem>
            </LinkContainer>
            <NavItem eventKey={2} onClick={props.logout}>Log Out</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default connect(null, { logout, authorizeUser })(AppNavbar);
