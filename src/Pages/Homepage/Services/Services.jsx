import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('./data/services.json')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container">
      <Row xs={1} md={2} lg={3} className="g-4 card-container">
        {services.map((service) => (
          <Service service={service} key={service.id} />
        ))}
      </Row>
    </div>
  );
};

export default Services;
