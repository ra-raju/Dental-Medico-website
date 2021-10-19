import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import './ServiceDetails.css';

const ServiceDetails = () => {
  const { id } = useParams();
  // console.log(id);

  const [services, setServices] = useState([]);
  const [singleService, setSignleService] = useState({});

  useEffect(() => {
    fetch('/data/services.json')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  useEffect(() => {
    const matchedService = services.find(
      (service) => service.id === parseInt(id)
    );
    console.log(matchedService);
    setSignleService(matchedService);
  }, [services]);

  return (
    <div className="d-flex align-items-center justify-content-center my-5">
      <Card style={{ width: '40rem' }}>
        <Card.Img variant="top" src={singleService?.img} />
        <Card.Body>
          <Card.Title>{singleService?.serviceName}</Card.Title>
          <Card.Text>{singleService?.serviceDescription}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceDetails;
