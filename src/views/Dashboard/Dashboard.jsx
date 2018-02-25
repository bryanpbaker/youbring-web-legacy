import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { authorizeUser } from '../../actions/auth.actions';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMessage: false,
    };
  }

  componentWillMount() {
    if (!this.props.isAuthorized) {
      this.props.authorizeUser();
    }
  }

  render() {
    if (this.props.isAuthorized === false) {
      return <Redirect to="/" />;
    }

    return (
      <div className="dashboard">
        Dashboard!
        <div>
          <Link to="/">Landing Page</Link>
        </div>
      </div>
    )
  };
};

function mapStateToProps(state) {
  return {
    user: state.user,
    isAuthorized: state.isAuthorized,
  };
}

export default connect(mapStateToProps, { authorizeUser })(Dashboard);