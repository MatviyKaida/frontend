import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <header className="hero-section w3-display-container w3-center" id="home">
      <div className="overlay-text">
        <span className="w3-text-white w3-wide">My Website</span>
      </div>
    </header>
  );
};

export default HeroSection;
