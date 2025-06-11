import React from 'react';

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Empowering Nigerian Businesses</h2>
          <p className="section-subtitle">with cutting-edge Software Solutions, Payment Systems, IT Consultancy & Digital Transformation</p>
        </div>
        
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">💻</div>
            <h3>Software Solutions</h3>
            <p>Custom software development tailored to your business needs. From web applications to enterprise systems, we build scalable solutions that drive efficiency and growth.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">💳</div>
            <h3>Payment Solutions</h3>
            <p>Secure, reliable payment systems and fintech solutions designed for the Nigerian market. Integration with local and international payment gateways.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">🚀</div>
            <h3>Digital Transformation</h3>
            <p>Complete digital transformation services to modernize your business operations, enhance customer experience, and accelerate growth in the digital age.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;