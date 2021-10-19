import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './Appointment.css';

const Appointment = () => {
  const { user } = useAuth();

  // use history
  const history = useHistory();
  const appoinmentFeedback = () => {
    history.push('/appointment/feedback');
  };
  return (
    <div className="appointment-section">
      <h1>Get Appointment</h1>
      <div className="appointment-form">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={user.displayName} readOnly />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" value={user.email} readOnly />
          </Form.Group>
          <Form.Select aria-label="Default select example" className="my-2">
            <option>Select your Problem</option>
            <option value="Root Carnals">Root Carnals</option>
            <option value="Routine check-ups">Routine check-ups</option>
            <option value="Teeth Whitening">Teeth Whitening</option>
            <option value="Clips & Braces">OClips & Bracesne</option>
            <option value="Laser Treatments">Laser Treatments</option>
            <option value="Dental Fillings">Dental Fillings</option>
            <option value="other">others</option>
          </Form.Select>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Describe your Problem</Form.Label>
            <Form.Control as="textarea" rows={3} style={{ height: '100px' }} />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="mt-2"
            onClick={appoinmentFeedback}
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Appointment;
