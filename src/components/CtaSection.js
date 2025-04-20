import React from "react";
import "./CtaSection.css";
import { Button } from "./Button";

export const CtaSection = ({ scrollToContact }) => {
  return (
    <div className="cta-section" id="about-section">
      <div className="cta-bg">
        <div className="cta-ellipse-1"></div>
      </div>
      <div className="cta-bg-element">
        <div className="cta-ellipse-2"></div>
      </div>
      <div className="cta-overlay">
        <div className="cta-heading">
          <p className="cta-title">
            <span className="cta-title-text">Fast track your </span> 
            <span className="cta-title-highlight">AI strategy</span>
          </p>
          <p className="cta-description">
            We make adoption of AI within your business so easy, even your most resistant employees will become
            advocates of the technology
          </p>
        </div>
        <Button 
          text="talk to an expert" 
          className="cta-section-button"
          onClick={scrollToContact}
        />
      </div>
    </div>
  );
};