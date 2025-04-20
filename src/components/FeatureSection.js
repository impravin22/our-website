import React from "react";
import { Button } from "./Button";
import "./FeatureSection.css";

export const FeatureSection = ({ scrollToContact }) => {
  return (
    <div className="feature-section" id="solutions-section">
      <div className="content-container">
        <div className="heading-trusted-by">ZERO LEARNING CURVE</div>
        <p className="heading-mark">Unlock The Potential of AI<br />Within Your Business</p>
        <div className="heading">
          <p className="description">
            We make adoption of AI within your business so easy, even your most resistant employees will become
            advocates of the technology
          </p>
        </div>
        <Button 
          text="explore features" 
          className="feature-button"
          onClick={scrollToContact}
        />
      </div>
      <div className="feature-grid">
        <div className="feature-card">
          <div className="feature-icon-wrapper">
            <div className="feature-icon">
              <img className="icon-image" src="/icons/multi-agent.svg" alt="Multi Agent RAG" />
            </div>
          </div>
          <div className="feature-text">
            <div className="feature-title">Multi Agent RAG</div>
            <p className="feature-description">
              We leverage Agentic RAF technology that allows for high levels of precision across all
              your data management and analysis needs.
            </p>
          </div>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon-wrapper">
            <div className="feature-icon">
              <img className="icon-image" src="/icons/security.svg" alt="Security" />
            </div>
          </div>
          <div className="feature-text">
            <div className="feature-title">Unparalleled Data Security</div>
            <p className="feature-description">
              Ensure your data is protected with top-tier security protocols, guaranteeing privacy, integrity, and
              compliance.
            </p>
          </div>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon-wrapper">
            <div className="feature-icon">
              <img className="icon-image" src="/icons/efficiency.svg" alt="Efficiency" />
            </div>
          </div>
          <div className="feature-text">
            <div className="feature-title">Optimized Efficiency and Automation</div>
            <p className="feature-description">
              Streamline your workflows with advanced automation, significantly enhancing productivity
              and reducing operational overhead.
            </p>
          </div>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon-wrapper">
            <div className="feature-icon">
              <img className="icon-image" src="/icons/support.svg" alt="Support" />
            </div>
          </div>
          <div className="feature-text">
            <div className="feature-title">Expert Support and Guidance</div>
            <p className="feature-description">
              Receive dedicated support from our team of experts, committed to assisting you at every step
              and ensuring your success with our AI solutions.
            </p>
          </div>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon-wrapper">
            <div className="feature-icon">
              <img className="icon-image" src="/icons/analytics.svg" alt="Analytics" />
            </div>
          </div>
          <div className="feature-text">
            <div className="feature-title">Comprehensive Analytics and Insights</div>
            <p className="feature-description">
              Gain deep insights into your data with comprehensive analytics tools, empowering you
              to make informed decisions and drive strategic growth.
            </p>
          </div>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon-wrapper">
            <div className="feature-icon">
              <img className="icon-image" src="/icons/integration.svg" alt="Integration" />
            </div>
          </div>
          <div className="feature-text">
            <div className="feature-title">Seamless Integration</div>
            <p className="feature-description">
              Easily integrate with your existing systems and third-party applications, ensuring a smooth and
              cohesive workflow across all your platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};