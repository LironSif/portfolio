import React from 'react';
import './Footer.css'; 

const Footer = () => {
  const year = new Date().getFullYear(); 

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p className="footer-text">
          &copy; {year} Sifadotec. All rights reserved.
        </p>
        <p className="footer-text">
          Terms of Service | Privacy Policy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
