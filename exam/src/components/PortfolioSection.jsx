import React, { useEffect, useState } from 'react';
import './PortfolioSection.css';

const PortfolioSection = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('/public/images.json') 
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => {
        console.error('Failed to load images:', err);
      });
  }, []);

  return (
    <section className="portfolio-section w3-container w3-padding-64 w3-light-grey" id="portfolio">
      <h2 className="portfolio-title">My Portfolio</h2>
      <div className="portfolio-grid">
        {images.slice(0, 8).map((src, index) => (
          <div key={index} className="portfolio-item">
            <img src={src} alt={`Portfolio ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="load-more-container">
        <button className="load-more-button">Load more</button>
      </div>
    </section>
  );
};

export default PortfolioSection;
