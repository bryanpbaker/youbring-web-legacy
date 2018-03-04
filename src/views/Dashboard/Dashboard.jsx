import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import AppNavbar from '../../containers/AppNavbar/AppNavbar';
import EventsList from '../../containers/EventsList/EventsList';
import CreateEventModal from '../../containers/CreateEventModal/CreateEventModal';
import './Dashboard.styles.css';

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
    };

    this.createEventModalTrigger = this.createEventModalTrigger.bind(this);
    this.onRequestCloseModal = this.onRequestCloseModal.bind(this);
  }

  onRequestCloseModal() {
    this.createEventModalTrigger();
  }

  createEventModalTrigger() {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen,
    });
  }

  render() {
    return (
      <div className="dashboard">
        <AppNavbar />
        <Grid fluid>
          <Row className="title-section">
            <Col xs={12}>    
              <h1>Dashboard</h1>
              <div className="actions pull-right">
                <Button className="action-button btn-accent" onClick={this.createEventModalTrigger}>
                  <FontAwesome
                    name="plus-circle"
                    size="2x"
                  />
                  <span className="title">Create New Event</span>
                </Button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <EventsList />
            </Col>
          </Row>
        </Grid>
        <CreateEventModal
          modalIsOpen={this.state.modalIsOpen}
          onRequestCloseModal={this.onRequestCloseModal}
        />
      </div>
    );
  }
}

export default Dashboard;
