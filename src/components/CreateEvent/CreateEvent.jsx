import React, { Component } from 'react';
import Modal from 'react-modal';

class CreateEvent extends Component {
  componentWillMount() {
    Modal.setAppElement('body');
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
        </Modal>
      </div>
    )
  }
}

export default CreateEvent;
