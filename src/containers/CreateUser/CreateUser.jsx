import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { createUser } from '../../actions/auth.actions';

// form validation
const validate = (values) => {
  // empty object for errors to go
  const errors = {};

  if (!values.firstName) {
    errors.firstName = 'Please enter your first name';
  }

  if (!values.lastName) {
    errors.lastName = 'Please enter your first name';
  }

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

const CreateUser = ({ handleSubmit }) => (
  <div className="email-login">
    <h3>Sign Up!</h3>
    <form onSubmit={handleSubmit(createUser)}>
      <Field name="firstName" component={renderField} className="form-control" type="text" label="First Name" />
      <Field name="lastName" component={renderField} className="form-control" type="text" label="Last Name" />
      <Field name="email" component={renderField} className="form-control" type="email" label="Email" />
      <Field name="password" component={renderField} className="form-control" type="password" label="Password" />
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>
);

export default reduxForm({
  form: 'CreateUser',
  validate,
}, null, { createUser })(CreateUser);