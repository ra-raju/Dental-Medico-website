import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-section">
      <div className="about">
        <div className="img-section">
          <img
            src="https://img.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg?size=338&ext=jpg"
            alt=""
          />
        </div>
        <div className="description-section">
          <h1>We Care About Your teeth</h1>
          <p>
            Family Health Centers of San Diego (FHCSD) offers comprehensive
            dental services at eight locations throughout San Diego County. Our
            dental providers are trained in providing preventive and restorative
            oral health services with an emphasis on oral health disease
            prevention.
          </p>
          <img
            src="https://preview.colorlib.com/theme/prodent/img/xawards.jpg.pagespeed.ic.hUWL_F8hry.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
