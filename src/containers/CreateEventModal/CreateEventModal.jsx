import React, { Component } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const CreateEventModal = props => (
  <div className="create-event-modal">
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={props.onRequestCloseModal}
      shouldCloseOnOverlayClick
    >
      <button onClick={props.onRequestCloseModal}>Close</button>
      <h2>Create a New Event!</h2>
    </Modal>
  </div>
);

export default CreateEventModal;
