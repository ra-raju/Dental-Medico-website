import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './Service.css';

const Service = (props) => {
  const { serviceName, serviceDetails, img } = props.service;
  return (
    <div>
      <Col>
        <Card className="card">
          <Card.Img variant="top" src={img} className="card-img" />
          <Card.Body>
            <Card.Title>{serviceName}</Card.Title>
            <Card.Text className="card-details">{serviceDetails}</Card.Text>

            <footer className="">
              <Button variant="primary">Go somewhere</Button>
            </footer>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Service;
