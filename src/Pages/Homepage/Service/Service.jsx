import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Service.css';

const Service = (props) => {
  const { id, serviceName, serviceDetails, img } = props.service;

  // use history
  const history = useHistory();

  const serviceDetailsHandler = () => {
    history.push(`/services/details/${id}`);
  };
  return (
    <div>
      <Col>
        <Card className="card">
          <Card.Img variant="top" src={img} className="card-img" />
          <Card.Body>
            <Card.Title>{serviceName}</Card.Title>
            <Card.Text className="card-details">{serviceDetails}</Card.Text>

            <footer>
              <Button variant="primary" onClick={serviceDetailsHandler}>
                Show Details
              </Button>
            </footer>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Service;
