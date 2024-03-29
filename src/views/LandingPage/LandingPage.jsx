import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { authorizeUser } from '../../actions/auth.actions';


class LandingPage extends Component {
  componentWillMount() {
    if (!this.props.user) {
      this.props.authorizeUser();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isAuthorized) {
      setTimeout(() => {
        this.props.history.push('/events');
      }, 1000);
    }
  }

  render() {
    if (this.props.isAuthorized === false) {
      return (
        <div className="landing-page">
          Landing Page!
          <div>
            <Link to="/events">Dashboard</Link>
          </div>
          <div>
            <Link to ="/login">Login</Link>
          </div>
        </div>
      )
    } else if (this.props.isAuthorized) {
      return <Redirect to="/events" />;
    }

    return (
      <div className="loading">
        Loading...
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthorized: state.isAuthorized,
  };
}

export default connect(mapStateToProps, { authorizeUser })(LandingPage);
