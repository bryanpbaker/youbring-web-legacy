import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import AppNavbar from '../AppNavbar/AppNavbar';

import { authorizeUser } from '../../actions/auth.actions';
import { fetchContacts } from '../../actions/contacts.actions';

class Contacts extends Component {
  componentWillMount() {
    this.props.authorizeUser();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user) {
      this.props.fetchContacts(nextProps.user);
    }
  }

  renderContacts() {
    return this.props.user.profile.contact.map((contact) => {
      return <li>{contact.firstName}</li>;
    });
  }

  render() {
    if (this.props.user) {
      return (
        <div className="contacts">
          <AppNavbar />
          {this.props.user.profile.contact.length > 0 &&
            <ul>
              {this.renderContacts()}
            </ul>
          }
          {!this.props.user.profile.contact.length &&
            <p>You dont have any contacts!</p>
          }
        </div>
      );
    }

    if (this.props.isAuthenticated === false) {
      return <Redirect to="/" />;
    }

    return (
      <div className="contacts loading">
        <AppNavbar />
        <div>loading...</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    isAuthenticated: state.isAuthenticated,
  };
}

export default connect(mapStateToProps, { authorizeUser, fetchContacts })(Contacts);
