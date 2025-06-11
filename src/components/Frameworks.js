import React from 'react';

const Frameworks = () => {
  return (
    <section className="frameworks" id="frameworks">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Custom Digital Frameworks</h2>
          <p className="section-subtitle">Engineered for Success</p>
        </div>
        
        <div className="framework-grid">
          <div className="framework-card">
            <h3>AI-Enabled Semantic Search Framework</h3>
            <p>Leveraging AI and Gen AI for secure, insightful data retrieval, enabling faster decisions and enhanced productivity.</p>
          </div>
          
          <div className="framework-card">
            <h3>AI-Based Payment Detection System</h3>
            <p>Detect, prevent, and mitigate payments fraud in real-time, ensuring complience and security for financial transactions at scale.</p>
          </div>
          
          <div className="framework-card">
            <h3>Loyalty Management System</h3>
            <p>Strengthen customer connections with a white-label loyalty solution designed to drive retention and value.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Frameworks;