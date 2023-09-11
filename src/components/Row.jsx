import React from 'react';
import './Row.css';

function Row({ imageSrc, title, description }) {
    return (
        <div className="row-container">
            <div className="row-img-div">
                <img src={imageSrc} alt="Row" className="row-image" />
            </div>
            <div className="row-title">
                {title}
            </div>
            <div className="row-description">
                {description}
            </div>
        </div>
    );
}

export default Row;
