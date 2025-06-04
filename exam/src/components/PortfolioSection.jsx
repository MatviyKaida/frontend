import React, { useEffect, useState } from 'react';
import './PortfolioSection.css';
import ImageModal from './ImageModal';

const PortfolioSection = () => {
  const [images, setImages] = useState([]);
  const [modalImage, setModalImage] = useState(null);
  const [modalCaption, setModalCaption] = useState('');

  useEffect(() => {
    fetch('/images.json')
      .then(res => res.json())
      .then(setImages);
  }, []);

  return (
    <section id="portfolio"className="portfolio-section">
      <h2>My Portfolio</h2>
      <div className="portfolio-grid">
        {images.map((item, index) => (
          <div
            key={index}
            className="portfolio-item"
            onClick={() => {
              setModalImage(item.src);
              setModalCaption(item.caption);
            }}
          >
            <img src={item.src} alt={item.caption} />
          </div>
        ))}
      </div>
      <button className="load-more-button">LOAD MORE</button>
      <ImageModal
        image={modalImage}
        caption={modalCaption}
        onClose={() => setModalImage(null)}
      />
    </section>
  );
};

export default PortfolioSection;
