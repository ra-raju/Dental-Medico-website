import React from 'react';
import heroImg from '../../../image/hero.png';
import './HeroSection.css';
const HeroSection = () => {
  return (
    <div className="hero-section">
      <img className="hero-img" src={heroImg} alt="" />
      <button className="hero-btn">
        get Apponintment{' '}
        <span>
          <i className="fas fa-arrow-right arrow-icon"></i>
        </span>
      </button>
    </div>
  );
};

export default HeroSection;
