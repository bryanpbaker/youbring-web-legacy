import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './TitleSection.css';

import ActionButton from '../ActionButton/ActionButton';

const TitleSection = (props) => {
  const renderActions = () => {
    return props.actions.map((action) => {
      return (
        <ActionButton 
          title={action.title}
          icon={action.icon}
          color={action.color}
        />
      );
    });
  };

  return (
    <section className="title-section">
      <Grid fluid>
        <Row>
          <Col xs={12}>    
            <h1>{props.title}</h1>
            <div className="actions pull-right">
              {renderActions()}
            </div>
          </Col>
        </Row>
      </Grid>
    </section>
  );
};

export default TitleSection;