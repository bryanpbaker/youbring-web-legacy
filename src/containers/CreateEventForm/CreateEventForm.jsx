import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createUser } from '../../actions/auth.actions';
import Loader from '../../components/Loader/Loader';

// form validation
const validate = (values) => {
  // empty object for errors to go
  const errors = {};

  if (!values.name) {
    errors.eventName = 'Please enter a name for your event';
  }

  if (!values.date) {
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
  return (
    <div className="email-login">
      <h3>Sign Up!</h3>
      <form onSubmit={props.handleSubmit(props.passEventValues)}>
        <Field name="name" component={renderField} className="form-control" type="text" label="Event Name" />
        <Field name="date" component={renderField} className="form-control" type="date" label="Event Date" />
        <Field name="description" component={renderField} className="form-control" type="text" label="Description" />
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
