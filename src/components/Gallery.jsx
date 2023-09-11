import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import "./Gallery.css"; // Import the CSS file

const images = [
  "https://picsum.photos/896/504",
  "https://picsum.photos/896/504",
  "https://picsum.photos/896/504",
  "https://picsum.photos/896/504",
  "https://picsum.photos/896/504",
  "https://picsum.photos/896/504",
  "https://picsum.photos/896/504",
];

function Gallery() {
  return (
    <div>
      <h1 className="gallery-title">Our moments at a glance</h1>
      <div className="gallery-container">
        <SimpleImageSlider
          width={window.innerWidth > 768 ? 896 : window.innerWidth - 40}
          height={window.innerWidth > 768 ? 504 : (window.innerWidth - 40) * (504 / 896)}
          images={images}
          showBullets={true}
          showNavs={true}
        />
      </div>
    </div>
  );
}

export default Gallery;
