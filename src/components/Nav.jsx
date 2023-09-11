import React, { useState } from 'react';
import './Nav.css';

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <header className="title-bar">
                <div className="logo">
                    <img src={require('../images/logo_bg.png')} alt="Logo" />
                </div>
                <div className={`nav-toggle ${menuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <nav className={`navigation ${menuOpen ? 'open' : ''}`}>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/programs">Our Programs</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/gallery">Gallery</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Nav;
