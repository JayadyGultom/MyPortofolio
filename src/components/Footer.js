import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Creative Developer. All rights reserved.</p>
        <p>Built with ❤️ using React.js</p>
        <div className="social-links">
          <a href="https://www.instagram.com/jaym.gultom/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg" alt="Instagram" style={{width: '24px', height: '24px', filter: 'invert(1)'}} />
          </a>
          <a href="https://www.linkedin.com/in/jayadymanagamgultom/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" style={{width: '24px', height: '24px'}} />
          </a>
          <a href="https://github.com/JayadyGultom" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" style={{width: '24px', height: '24px'}} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 