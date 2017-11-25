import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class EmailLogin extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.props.handleSubmit;
  }

  render() {
    return (
      <div className="email-login">
        <h3>Login with your email address</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field name="email" component="input" className="form-control" type="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field name="password" component="input" className="form-control" type="password" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'EmailLogin',
})(EmailLogin);
