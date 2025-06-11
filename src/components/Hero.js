import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="african-map-bg"></div>
      <div className="african-pattern"></div>
      
      <div className="container">
        <div className="hero-content">
          <h1>Drive Digital Transformation For Africa</h1>
          <p>Empowering Nigerian businesses and organizations with tailored, cutting-edge digital solutions that achieve excellence and meaningful impact</p>
          <p>We deliver comprehensive software solutions, payment systems, IT consultancy, and digital transformation services designed specifically for the Nigerian market and beyond.</p>
          
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">100+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="stat">
              <span className="stat-number">80+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;