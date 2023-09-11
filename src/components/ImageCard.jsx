import React from "react";
import "./ImageCard.css"

function ImageCard({ title, imageSrc, description }) {
  return (
    <div className="image-card">
      <img src={imageSrc} alt="Program" />
      <p className="image-title">{title}</p>
      <p className="image-description">{description}</p>
    </div>
  );
}

export default ImageCard;
