import React from "react";
import { Button } from "./Button";
import "./Section.css";

export const Section = ({ scrollToContact }) => {

  return (
    <div className="section" id="home-section">
      <div className="hero-section">
        <div className="hero-copy">
          <div className="hero-content">
            <div className="subtitle">TAILORED AI SOLUTIONS</div>

            <div className="heading">
              <div className="main-heading">
                <div className="heading-container">
                  <div className="heading-part">Unlock</div>

                  <div className="div">
                    <div className="heading-highlight">AI</div>

                    <div className="text-wrapper"> capabilities</div>
                  </div>
                </div>

                <div className="subheading">with our customized services</div>
              </div>
            </div>

            <p className="description">
              Enhance your business outcomes by streamlining and automating your
              processes with our custom AI solutions.
            </p>
          </div>

          <a href="#contact-form" className="hero-button-link">
            <Button 
              text="talk to our experts" 
              className="hero-button"
            />
          </a>
        </div>

        <div className="hero-svg-fill">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="hero-video"
          >
            {/* Video source will be added when the file is available */}
            <source src="/videos/ai-assistant-hover-and-click-interaction.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* AI text overlay */}
          <div className="ai-text">AI</div>
        </div>
      </div>
    </div>
  );
};