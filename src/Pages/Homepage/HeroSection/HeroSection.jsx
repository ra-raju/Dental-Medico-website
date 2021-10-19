import React from 'react';
import { Carousel } from 'react-bootstrap';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Carousel fade className="slider">
        <Carousel.Item>
          <img
            className="d-block w-100 slider-img"
            src="./image/slide1-min.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./image/slide2-min.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./image/slide3-min.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./image/slide4-min.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./image/slide5-min.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HeroSection;
