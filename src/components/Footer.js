import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
// import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h2>Navigation</h2>
        <ul>
          <li>Home</li>
          <li>Menu</li>
          <li>Order</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="footer-section">
        <h2>Contact Us</h2>
        <p>Email: info@example.com</p>
        <p>Phone: +1 123 456 7890</p>
      </div>
      <div className="footer-section">
        <h2>Follow Us</h2>
        <div className="social-icons">
          <FaFacebook className="icon" />
          <FaTwitter className="icon" />
          <FaInstagram className="icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
