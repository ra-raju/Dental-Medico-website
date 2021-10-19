import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="important-information">
        <div className="link-section">
          <h5 className="link-heading">Important Link</h5>
          <div className="imp-link">
            <ul>
              <li>
                <Link className="link" to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link className="link" to="/appointment">
                  Appointment
                </Link>
              </li>
              <li>
                <HashLink className="link" to="/home#services">
                  Services
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="contact">
          <h5 className="contact-heading">contact us</h5>
          <div className="contact-us">
            <p>
              <a href="tel:+880225563324" className="contact-link">
                <span>
                  <i className="fas fa-mobile-alt contact-icon"></i>
                </span>
                +8802657485
              </a>
            </p>
            <p>
              <a href="mailto:robeyoulawal@gmail.com" className="contact-link">
                <span>
                  <i className="fas fa-envelope contact-icon"></i>
                </span>
                robeyoulawal@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <p className="link-heading">all right reserved by &copy; Dental Medico</p>
    </div>
  );
};

export default Footer;
