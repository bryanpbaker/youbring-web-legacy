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

const EmailLogin = ({ authErrors, handleSubmit }) => {
  // auth error cases and messages
  if (authErrors && authErrors.status === 404) {
    authErrors.user = 'User does not exist!';
  }

  if (authErrors && authErrors.status === 401) {
    authErrors.password = 'Incorrect Password';
  }

  return (
    <div className="email-login">
      <h3>Login with your email address</h3>
      <form onSubmit={handleSubmit}>
        <Field name="email" component={renderField} className="form-control" type="email" label="Email" />
        {authErrors && authErrors.user &&
          <div className="text-danger">
            {authErrors.user}
          </div>
        }
        <Field name="password" component={renderField} className="form-control" type="password" label="Password" />
        {authErrors && authErrors.password &&
          <div className="text-danger">
            {authErrors.password}
          </div>
        }
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      {authErrors &&
        <h4 className="text-danger">
          Login Failed
        </h4>
      }
    </div>
  );
};

export default reduxForm({
  form: 'EmailLogin',
  validate,
})(EmailLogin);
