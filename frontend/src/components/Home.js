import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <h1>LATA CHAPADIA</h1>
        <h2>SOFTWARE ENGINEER</h2>
        <p>Results-driven Software Engineer with over 2 years of experience in designing, developing, and maintaining web applications. Proficient in PHP and React, with a proven ability to implement innovative solutions and deliver customer-centric software.</p>
        <div className="social-links">
          <a href="https://github.com/littledevelop" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/littledevelop" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="#contact" class="cta-button">Get in Touch</a>
        </div>
      </div>
      
      <div className="skills-section">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Frontend</h3>
            <ul>
              <li>React.js</li>
              <li>JavaScript</li>
              <li>HTML, CSS</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Backend</h3>
            <ul>
              <li>PHP (Laravel, Core PHP)</li>
              <li>MySQL</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Tools & Platforms</h3>
            <ul>
              <li>Git</li>
              <li>GitHub</li>
              <li>XAMPP</li>
              <li>Postman</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 