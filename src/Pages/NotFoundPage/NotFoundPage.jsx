import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import notFoundImg from '../../image/404.jpg';
import './NotFoundPage.css';

const NotFoundPage = () => {
  const history = useHistory();

  const backToHomepage = () => {
    history.push('/home');
  };
  return (
    <div className="notfound-section">
      <img src={notFoundImg} alt="" className="notFoundImg" />
      <Button
        variant="primary"
        className="notfound-btn"
        onClick={backToHomepage}
      >
        Go to Home Page
      </Button>
    </div>
  );
};

export default NotFoundPage;
