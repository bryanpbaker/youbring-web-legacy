import React from 'react';
import { Field, reduxForm } from 'redux-form';

const EmailLogin = ({ handleSubmit }) => (
  <div className="email-login">
    <h3>Login with your email address</h3>
    <form onSubmit={handleSubmit}>
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

export default reduxForm({
  form: 'EmailLogin',
})(EmailLogin);
