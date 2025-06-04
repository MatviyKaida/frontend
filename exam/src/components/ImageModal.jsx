import React from 'react';
import './ImageModal.css';

const ImageModal = ({ image, caption, onClose }) => {
  if (!image) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <img src={image} alt={caption} />
        <p>{caption}</p>
        <button className="modal-close" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default ImageModal;
