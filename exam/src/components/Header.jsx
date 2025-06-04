import React from 'react';
import './Header.css';

const Header = () => {
  const openCalculator = (e) => {
    e.preventDefault();
    const modal = document.getElementById("calculator-modal");
    if (modal) modal.style.display = "block";
  };

  return (
    <header className="site-header">
      <nav className="nav-bar">
        <a href="#home" className="nav-link">HOME</a>
        <a href="#about" className="nav-link">ABOUT</a>
        <a href="#portfolio" className="nav-link">PORTFOLIO</a>
        <a href="#contact" className="nav-link">CONTACT</a>
        <a href="#" className="nav-link" onClick={openCalculator}>CALCULATOR</a>
      </nav>
    </header>
  );
};

export default Header;
