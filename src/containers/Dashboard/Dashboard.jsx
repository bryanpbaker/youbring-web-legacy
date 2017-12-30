import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';

import { fetchUser, authorizeUser, logout } from '../../actions/auth.actions';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  componentWillMount() {
    setTimeout(() => {
      this.props.authorizeUser();
      this.props.fetchUser();
    }, 1500);
  }

  logout() {
    this.props.logout();
  }

  render() {
    if (this.props.isAuthenticated && this.props.user) {
      return (
        <div className="dashboard">
          <DashboardHeader
            logout={this.logout}
          />
          <h1>Hello { this.props.user.profile.first_name}!</h1>
        </div>
      );
    }

    if (this.props.isAuthenticated === false) {
      return <Redirect to="/" />;
    }

    return (
      <div className="dashboard-loading">
        loading...
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    user: state.user,
    isAuthenticated: state.isAuthenticated,
  };
}

export default connect(mapStateToProps, { fetchUser, authorizeUser, logout })(Dashboard);
