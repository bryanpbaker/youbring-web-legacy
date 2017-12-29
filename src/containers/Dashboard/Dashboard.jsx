import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { fetchUser } from '../../actions/auth.actions';

class Dashboard extends Component {
  componentWillMount() {
    this.props.fetchUser();
  }

  render() {
    if (this.props.user) {
      console.log(this.props.user);
      return (
        <div className="dashboard">
          <h1>Hello { this.props.user.profile.first_name}!</h1>
        </div>
      );
    }

    return <Redirect to="/" />;
  }
};

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps, { fetchUser })(Dashboard);
