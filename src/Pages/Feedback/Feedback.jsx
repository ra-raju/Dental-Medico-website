import React from 'react';
import './Feedback.css';
import img from './thank.jpg';

const Feedback = () => {
  return (
    <div className="feed-container">
      <img src={img} alt="" className="feed-img" />
    </div>
  );
};

export default Feedback;
