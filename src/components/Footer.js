import React from "react";
import "./Footer.css";

export const Footer = () => {
  // Function to scroll to contact form
  const scrollToContact = () => {
    document.getElementById('contact-form').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="footer-section">
      <div className="footer-content">
        <div className="footer-column">
          <div className="footer-heading">Logo</div>
          <div className="footer-contact">contact@example.com</div>
        </div>
        
        <div className="footer-column">
          <div className="footer-heading">Services</div>
          <div className="footer-link">Custom AI</div>
          <div className="footer-link">Video Analytics</div>
          <div className="footer-link">Price Optimization</div>
          <div className="footer-link">Product Matching</div>
          <div className="footer-link">Predictive Maintenance</div>
          <div className="footer-link">AI On The Edge</div>
          <div className="footer-link">Transformers</div>
          <div className="footer-link">Data Engineering</div>
          <div className="footer-link">AI Adoption</div>
          <div className="footer-link">Center of Excellence</div>
        </div>
        
        <div className="footer-column">
          <div className="footer-heading">Resources</div>
          <div className="footer-link">Blog</div>
          <div className="footer-link">Guides</div>
          <div className="footer-link">Collections</div>
        </div>
        
        <div className="footer-column">
          <div className="footer-links-group">
            <div className="footer-heading">Company</div>
            <div className="footer-link">About</div>
            <div className="footer-link">Partnerships</div>
            <div className="footer-link">Team</div>
            <div className="footer-link">Careers</div>
            <div className="footer-link">Customers</div>
            <div className="footer-link" onClick={scrollToContact}>Contact</div>
            <div className="footer-link">Terms and Conditions</div>
          </div>
          
          <div className="social-icons">
            <a href="https://facebook.com" className="social-icon" aria-label="Facebook">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z" fill="white"/>
              </svg>
            </a>
            <a href="https://twitter.com" className="social-icon" aria-label="Twitter">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10V10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.46 14.34 5.08 14.39 4.69 14.39C4.42 14.39 4.15 14.36 3.89 14.31C4.43 16 6 17.26 7.89 17.29C6.43 18.45 4.58 19.13 2.56 19.13C2.22 19.13 1.88 19.11 1.54 19.07C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z" fill="white"/>
              </svg>
            </a>
            <a href="https://linkedin.com" className="social-icon" aria-label="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H6.5V10H9V17ZM7.7 8.7C6.8 8.7 6 7.9 6 7C6 6.1 6.8 5.3 7.7 5.3C8.6 5.3 9.4 6.1 9.4 7C9.4 7.9 8.6 8.7 7.7 8.7ZM18 17H15.5V13.5C15.5 12.7 14.8 12 14 12C13.2 12 12.5 12.7 12.5 13.5V17H10V10H12.5V11.3C12.8 10.5 13.8 10 15 10C16.7 10 18 11.3 18 13V17Z" fill="white"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};