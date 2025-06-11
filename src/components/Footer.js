import React from 'react';

const Footer = () => {
  return (
    <footer id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon"></div>
              <div className="footer-logo-text">
                <span className="footer-logo-main">CodeVault</span>
                <span className="footer-logo-sub">Africa</span>
              </div>
            </div>
            <p>Empowering Nigerian businesses with cutting-edge digital solutions, driving innovation and growth across Africa's technology landscape.</p>
          </div>
          
          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li><a href="#services">Software Solutions</a></li>
              <li><a href="#services">Payment Systems</a></li>
              <li><a href="#services">IT Consultancy</a></li>
              <li><a href="#services">Digital Transformation</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#projects">Our Work</a></li>
              <li><a href="#frameworks">Solutions</a></li>
              <li><button className="footer-link-button">Careers</button></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Resources</h3>
            <ul>
              <li><button className="footer-link-button">Blog</button></li>
              <li><button className="footer-link-button">Case Studies</button></li>
              <li><button className="footer-link-button">Support</button></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Get In Touch</h3>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div className="contact-text">
                  C05 Kabuga City Plaza Opp Taj Bank Kano, Nigeria<br />
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div className="contact-text">
                  +234 808 030 0708,
                  <ol>+234 816 380 6023</ol>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div className="contact-text">
                  info@codevaultafrica.com
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 CodeVault Africa. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
