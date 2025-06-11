import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (window.scrollY > 100) {
        header.style.background = 'rgba(26, 26, 26, 0.98)';
      } else {
        header.style.background = 'rgba(26, 26, 26, 0.95)';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      <div className="container">
        <nav>
          <a href="/" className="logo">
            <div className="logo-icon"></div>
            <div className="logo-text">
              <span className="logo-main">CodeVault</span>
              <span className="logo-sub">Africa</span>
            </div>
          </a>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#services" onClick={closeMenu}>Services</a></li>
            <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
            <li><a href="#frameworks" onClick={closeMenu}>Solutions</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
          <div className="menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
