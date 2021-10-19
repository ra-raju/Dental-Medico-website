import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './NotFoundPage.css';

const NotFoundPage = () => {
  const history = useHistory();

  const backToHomepage = () => {
    history.push('/home');
  };
  return (
    <div className="notfound-section">
      <img src="./image/404.jpg" alt="" className="notFoundImg" />
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
