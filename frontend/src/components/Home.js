import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../common.css';
import { FaGithub, FaLinkedin, FaTwitter, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase, FaDocker } from 'react-icons/fa';
import { SiJavascript, SiPhp, SiLaravel, SiMysql, SiMongodb } from 'react-icons/si';

const Home = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="home">
      <section className="section hero">
        <div className="container hero-content">
          <h1 className="fade-in-up">LATA CHAPADIA</h1>
          <h2 className="fade-in-up-delay-1">Full Stack Developer</h2>
          <p className="fade-in-up-delay-2">
            Passionate Full Stack Developer with expertise in PHP, Laravel, React, and modern web technologies.
            Dedicated to creating efficient, scalable, and user-friendly applications that solve real-world problems.
          </p>
          <div className="social-links fade-in-up-delay-3">
            <a href="https://github.com/littledevelop" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-link">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/lata-chapadia-271036233/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-link">
              <FaTwitter />
            </a>
          </div>
          <button onClick={handleContactClick} className="btn fade-in-up-delay-3">Get in Touch</button>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Technical Expertise</h2>
          <div className="grid grid-4">
            <div className="card">
              <h3>Frontend Development</h3>
              <ul>
                <li><FaReact className="icon" /> React.js</li>
                <li><SiJavascript className="icon" /> JavaScript (ES6+)</li>
                <li><FaHtml5 className="icon" /> HTML5</li>
                <li><FaCss3Alt className="icon" /> CSS3 & Sass</li>
              </ul>
            </div>
            
            <div className="card">
              <h3>Backend Development</h3>
              <ul>
                <li><SiPhp className="icon" /> PHP</li>
                <li><SiLaravel className="icon" /> Laravel</li>
                <li><FaNodeJs className="icon" /> Node.js</li>
                <li><FaDatabase className="icon" /> RESTful APIs</li>
              </ul>
            </div>
            
            <div className="card">
              <h3>Database & Storage</h3>
              <ul>
                <li><SiMysql className="icon" /> MySQL</li>
                <li><SiMongodb className="icon" /> MongoDB</li>
                <li><FaDatabase className="icon" /> Redis</li>
                <li><FaDatabase className="icon" /> PostgreSQL</li>
              </ul>
            </div>
            
            <div className="card">
              <h3>DevOps & Tools</h3>
              <ul>
                <li><FaGithub className="icon" /> Git & GitHub</li>
                <li><FaDocker className="icon" /> Docker</li>
                <li><FaDatabase className="icon" /> CI/CD</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;