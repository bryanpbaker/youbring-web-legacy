import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';

import { fetchUser, authorizeUser } from '../../actions/auth.actions';

class Dashboard extends Component {
  componentWillMount() {
    setTimeout(() => {
      this.props.authorizeUser();
      this.props.fetchUser();
    }, 2000);
  }

  render() {
    if (this.props.isAuthorized && this.props.user) {
      return (
        <div className="dashboard">
          <DashboardHeader />
          <h1>Hello { this.props.user.profile.first_name}!</h1>
        </div>
      );
    }

    if (this.props.isAuthorized === false) {
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
    isAuthorized: state.isAuthorized,
  };
}

export default connect(mapStateToProps, { fetchUser, authorizeUser })(Dashboard);
