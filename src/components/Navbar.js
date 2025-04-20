import React, { useState, useEffect } from "react";
import "./Navbar.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to add/remove scrolled class
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to scroll to a specific section
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ 
      behavior: 'smooth' 
    });
    if (menuOpen) setMenuOpen(false);
  };

  // Function to scroll to contact form
  const scrollToContact = () => {
    document.getElementById('contact-form').scrollIntoView({ 
      behavior: 'smooth' 
    });
    if (menuOpen) setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-text" onClick={() => scrollToSection('home-section')}>SPC</span>
        </div>
        
        <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          <ul className="navbar-links">
            <li className="navbar-item">
              <a href="#home-section" className="navbar-link" onClick={(e) => { e.preventDefault(); scrollToSection('home-section'); }}>Home</a>
            </li>
            <li className="navbar-item">
              <a href="#services-section" className="navbar-link" onClick={(e) => { e.preventDefault(); scrollToSection('services-section'); }}>Services</a>
            </li>
            <li className="navbar-item">
              <a href="#about-section" className="navbar-link" onClick={(e) => { e.preventDefault(); scrollToSection('about-section'); }}>About</a>
            </li>
            <li className="navbar-item">
              <a href="#solutions-section" className="navbar-link" onClick={(e) => { e.preventDefault(); scrollToSection('solutions-section'); }}>Solutions</a>
            </li>
            <li className="navbar-item">
              <button onClick={scrollToContact} className="navbar-contact-button">Contact Us</button>
            </li>
          </ul>
        </div>
        
        <div className="navbar-mobile-toggle" onClick={toggleMenu}>
          <div className={`toggle-bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`toggle-bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`toggle-bar ${menuOpen ? 'open' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
};