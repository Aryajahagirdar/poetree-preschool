import React from "react";
import "./Footer.css"
import { SocialIcon } from 'react-social-icons';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="logo-container">
                    <img src={require('../images/logo_footer.png')} alt="Logo" className="logo_footer" />
                </div>
                <div className="social-icons">
                    <p>Find Us On:</p>
                    <div className="social-icon">
                        <SocialIcon network="linkedin" url="https://www.linkedin.com/" target="_blank" fgColor="#fff" style={{ height: 30, width: 30 }} />
                    </div>
                    <div className="social-icon">
                        <SocialIcon network="facebook" url="https://www.facebook.com/" target="_blank" fgColor="#fff" style={{ height: 30, width: 30 }} />
                    </div>
                    <div className="social-icon">
                        <SocialIcon network="instagram" url="https://www.instagram.com/" target="_blank" fgColor="#fff" style={{ height: 30, width: 30 }} />
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <p>&copy; 2023 Poetree Preschool. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;