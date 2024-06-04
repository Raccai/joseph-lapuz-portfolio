import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DarkMode from './DarkMode';

const Sidebar = ({ open, toggleEmptyDiv, enableToggle }) => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    if (enableToggle) {
      toggleEmptyDiv();
    }
  };

  return (
    <div className={`sidebar ${open ? 'sidebarOpen' : 'sidebarClosed'}`}>
      <div className="logo">
        <img src="/images/logo.svg" alt="Logo" />
      </div>
      <div className="links">
        <Link to="/Projects" onClick={() => handleLinkClick('Projects')} className={activeLink === 'Projects' ? 'active' : ''}>Projects</Link>
        <Link to="/About" onClick={() => handleLinkClick('About')} className={activeLink === 'About' ? 'active' : ''}>About</Link>
        <Link to="/CVResume" onClick={() => handleLinkClick('CVResume')} className={activeLink === 'CVResume' ? 'active' : ''}>Curriculum Vitae/Resume</Link>
      </div>
      <div className="social-links">
        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer"><img src="/images/linkedin.svg" alt="LinkedIn" /></a>
        <a href="https://www.instagram.com/?hl=en" target="_blank" rel="noreferrer"><img src="/images/instagram.svg" alt="Instagram" /></a>
        <a href="https://twitter.com/home?lang=en" target="_blank" rel="noreferrer"><img src="/images/twitter.svg" alt="Twitter" /></a>
      </div>
      <DarkMode />
      <div className="footer">
        Jojo © 2023
      </div>
    </div>
  );
};

export default Sidebar;
