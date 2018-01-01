import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createUser } from '../../actions/auth.actions';
import Loader from '../../components/Loader/Loader';

// form validation
const validate = (values) => {
  // empty object for errors to go
  const errors = {};

  if (!values.eventName) {
    errors.eventName = 'Please enter a name for your event';
  }

  if (!values.eventDate) {
    errors.eventDate = 'Select a date for your event';
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

const CreateEventForm = (props) => {
  /**
   * take user credentials and call createUser action creator
   * @param {Object} user credentials
   */
  const createNewUser = (values) => {
    props.createUser(values);
  };

  return (
    <div className="email-login">
      <h3>Sign Up!</h3>
      <form onSubmit={props.handleSubmit(createNewUser)}>
        <Field name="firstName" component={renderField} className="form-control" type="text" label="First Name" />
        <Field name="lastName" component={renderField} className="form-control" type="text" label="Last Name" />
        <Field name="email" component={renderField} className="form-control" type="email" label="Email" />
        <Field name="password" component={renderField} className="form-control" type="password" label="Password" />
        <button type="submit" className="btn btn-primary">Submit</button>
        {props.createUserError &&
          <div className="text-danger">
            {props.createUserError.message}
          </div>
        }
      </form>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    createUserError: state.errors.createUserErrors || {},
  };
}

export default connect(mapStateToProps, { createUser })(reduxForm({
  form: 'CreateEvent',
  validate,
})(CreateEventForm));
