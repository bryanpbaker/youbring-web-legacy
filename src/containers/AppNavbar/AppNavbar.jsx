import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, MenuItem, NavDropdown, NavItem, Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth.actions';

const AppNavbar = (props) => {
  return (
    <header className="dashboard-header">
      <Navbar fluid inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">YouBring</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Link</NavItem>
            <NavItem eventKey={2} href="#">Link</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Link Right</NavItem>
            <NavItem eventKey={2} onClick={props.logout}>Log Out</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default connect(null, { logout })(AppNavbar);
