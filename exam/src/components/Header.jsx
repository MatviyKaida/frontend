import React from 'react';
import './Header.css';

const Header = ({ onOpenCalculator }) => (
  <header className="site-header">
    <nav className="nav-bar">
      <a href="#home" className="nav-link">HOME</a>
      <a href="#about" className="nav-link">ABOUT</a>
      <a href="#portfolio" className="nav-link">PORTFOLIO</a>
      <a href="#contact" className="nav-link">CONTACT</a>
      <a
        href="#"
        className="nav-link"
        onClick={(e) => {
          e.preventDefault();
          onOpenCalculator();
        }}
      >
        CALCULATOR
      </a>
    </nav>
  </header>
);

export default Header;
