import React from 'react';

const Awards = () => {
  return (
    <section className="awards" id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Awards & Recognition</h2>
          <p className="section-subtitle">Accolades that keep us going</p>
        </div>
        
        <div className="awards-grid">
          <div className="award-card">
            <div className="award-icon">🏆</div>
            <h3>Best Leadership 2023</h3>
          </div>
          
          <div className="award-card">
            <div className="award-icon">🤝</div>
            <h3>Google Startups Partner 2025</h3>
          </div>
          
          <div className="award-card">
            <div className="award-icon">⭐</div>
            <h3>Best Softaware Product 2023</h3>
          </div>
          
          <div className="award-card">
            <div className="award-icon">🌟</div>
            <h3>Best Emerging Tech Company</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;