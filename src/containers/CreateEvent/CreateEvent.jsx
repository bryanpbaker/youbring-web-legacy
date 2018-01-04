import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import CreateEventForm from '../../containers/CreateEventForm/CreateEventForm';

import { createEvent } from '../../actions/events.actions';

class CreateEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      createEventFormValues: {},
    };

    this.createEvent = this.createEvent.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  createEvent(values) {
    this.setState({
      createEventFormValues: values,
    }, () => {
      this.props.createEvent(this.props.user, this.state.createEventFormValues);
      this.props.toggleModal();
    });
  }

  render() {
    return (
      <div className="create-event">
        <Modal
          isOpen={this.props.modalIsOpen}
          onRequestClose={() => this.props.toggleModal()}
        >
          <button onClick={() => this.props.toggleModal()}>close</button>
          <h1>Create an Event</h1>
          <CreateEventForm
            passEventValues={this.createEvent}
          />
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps, { createEvent })(CreateEvent)
