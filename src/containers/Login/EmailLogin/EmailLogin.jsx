import React from 'react';
import { Field, reduxForm } from 'redux-form';

// form validation
const validate = (values) => {
  // empty object for errors to go
  const errors = {};

  // check if an email has been entered
  if (!values.email) {
    errors.email = 'Please enter your email address';
    // ensure it's a valid email address
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // make sure a password is entered
  if (!values.password) {
    errors.password = 'Please enter your password';
  }

  return errors;
};

// custom field component
const renderField = ({
  label,
  type,
  input,
  meta: {
    touched,
    error,
    warning
  }
}) => (
  <div className="form-group">
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} className={`form-control ${touched && error ? 'input-invalid' : ''}`} />
      { touched &&
        (error && <span className="text-danger">{error}</span>)}
    </div>
  </div>
);

const EmailLogin = ({ handleSubmit }) => (
  <div className="email-login">
    <h3>Login with your email address</h3>
    <form onSubmit={handleSubmit}>
      <Field name="email" component={renderField} className="form-control" type="email" label="Email" />
      <Field name="password" component={renderField} className="form-control" type="password" label="Password" />
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>
);

export default reduxForm({
  form: 'EmailLogin',
  validate,
})(EmailLogin);