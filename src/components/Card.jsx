import React, { useState } from "react";
import "./Card.css";
import { Link } from 'react-router-dom'; // Import Link for navigation

function Card({ title, imageSrc, description1, description2, fulldescription }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="card">
      <div className="card-image">
        <img src={imageSrc} alt="Card" />
      </div>
      <div className="card-content">
        <h2 className="program-title">{title}</h2>
        <div className="program-card-description">
          <p className="desc1">{description1}</p>
          <p className="desc2">{description2}</p>
          {/* Use Link to navigate to the Contact page */}
          <Link to="/contact">
            <button className="contact-button">Contact Us</button>
          </Link>
          {expanded && (
            <p className="full">
              {fulldescription}
            </p>
          )}
        </div>
        <button className="button" onClick={handleExpand}>
          {expanded ? "-" : "+"}
        </button>
      </div>
    </div>
  );
}

export default Card;
