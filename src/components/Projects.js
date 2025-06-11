import React from 'react';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Discover Our Successful Projects</h2>
          <p className="section-subtitle">Look at our remarkable track record, featuring a collection of accomplished projects highlighting our expertise in delivering innovative and impactful solutions</p>
        </div>
        
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">E-Commerce Platform</div>
            <div className="project-content">
              <h3>Created a one stop perfume online shop</h3>
              <p>Revolutionary e-commerce platform with advanced features and seamless user experience</p>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-image">Business Management System</div>
            <div className="project-content">
              <h3>A Digital Solution for Business Management</h3>
              <p>Comprehensive digital management system for streamlined product management</p>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-image">Mobile Operations App</div>
            <div className="project-content">
              <h3>Custom Mobile Solution for Streamlined Operations</h3>
              <p>Advanced mobile application designed to optimize business operations and workflow</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;