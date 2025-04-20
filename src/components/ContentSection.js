import React, { useEffect, useRef, useState } from "react";
import "./ContentSection.css";

export const ContentSection = ({ scrollToContact }) => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const rightSideRef = useRef(null);

  // Set up intersection observer for feature cards
  useEffect(() => {
    const options = {
      root: rightSideRef.current, // Use the right-side container as the viewport
      rootMargin: '-10% 0px -30% 0px', // Focus on cards near the center
      threshold: [0.25, 0.5, 0.75] // Multiple thresholds for smoother transitions
    };

    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.25) {
          const index = parseInt(entry.target.dataset.index, 10);
          setActiveSection(index);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    
    // Observe all cards
    cardRefs.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => {
      if (cardRefs.current) {
        cardRefs.current.forEach(card => {
          if (card) observer.unobserve(card);
        });
      }
    };
  }, [cardRefs.current.length]);

  // Set active class on the current section
  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      if (card) {
        if (index === activeSection) {
          card.classList.add('active');
        } else {
          card.classList.remove('active');
        }
      }
    });
  }, [activeSection]);

  // Handle indicator click to scroll to section
  const scrollToSection = (index) => {
    if (cardRefs.current[index] && rightSideRef.current) {
      // Get the card's position relative to the right-side container
      const cardTop = cardRefs.current[index].offsetTop;
      const containerScrollTop = rightSideRef.current.scrollTop;
      const containerHeight = rightSideRef.current.clientHeight;
      const cardHeight = cardRefs.current[index].clientHeight;
      
      // Scroll to position card in center of container
      rightSideRef.current.scrollTo({
        top: cardTop - (containerHeight / 2) + (cardHeight / 2),
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="content-section" id="services-section" ref={sectionRef}>
      <div className="split-layout">
        {/* Left Side - Static content */}
        <div className="left-side">
          <div className="feature-title">CUSTOM AGENTIC DEPLOYMENT</div>
          <div className="feature-description">Streamline Your Business Operations</div>
          <div className="feature-details">
            Turn your business challenges into opportunities with AI agents that automate complex workflows, 
            reduce operational turnaround times, and free your team to focus on strategic initiatives.
          </div>
        </div>
        
        {/* Right Side - Now scrollable with stacked cards */}
        <div className="right-side" ref={rightSideRef}>
          <div className="features-container">
            <div 
              className="feature-card highlight" 
              ref={el => cardRefs.current[0] = el} 
              data-index="0"
            >
              <div className="feature-card-title">Streamline intricate workflows from start to finish</div>
              <div className="feature-card-text">
                Handle multi-step processes autonomously with AI Agents, from reading emails to updating
                systems and making decisions.
              </div>
            </div>
          
          <div 
            className="feature-card" 
            ref={el => cardRefs.current[1] = el} 
            data-index="1"
          >
            <div className="feature-card-title">Reduce operational turnaround times without sacrificing quality</div>
            <div className="feature-card-text">
              Scale operations while maintaining headcount. Our AI agents are able to increase the
              efficiency and effectiveness of your teams as you grow.
            </div>
          </div>
          
          <div 
            className="feature-card" 
            ref={el => cardRefs.current[2] = el} 
            data-index="2"
          >
            <div className="feature-card-title">Unleash your team's potential</div>
            <div className="feature-card-text">
              Provide solutions that your teams will actually use. Let AI handle routine tasks while your
              team focuses on strategy, innovation, and complex problem-solving.
            </div>
          </div>
          
          <div 
            className="feature-card highlight" 
            ref={el => cardRefs.current[3] = el} 
            data-index="3"
          >
            <div className="feature-card-title">Expert Support and Guidance</div>
            <div className="feature-card-text">
              Receive dedicated support from our team of experts, committed to assisting you at every step
              and ensuring your success with our AI solutions.
            </div>
          </div>
          
          {/* Add a few more cards to ensure sufficient scroll space */}
          <div 
            className="feature-card" 
            ref={el => cardRefs.current[4] = el} 
            data-index="4"
          >
            <div className="feature-card-title">Data-Driven Insights</div>
            <div className="feature-card-text">
              Leverage powerful analytics and reporting capabilities to gain valuable insights into your
              operations and make informed strategic decisions.
            </div>
          </div>
          
          <div 
            className="feature-card" 
            ref={el => cardRefs.current[5] = el} 
            data-index="5"
          >
            <div className="feature-card-title">Seamless Integration</div>
            <div className="feature-card-text">
              Our AI solutions integrate effortlessly with your existing systems and workflows, ensuring
              a smooth transition and minimal disruption to your operations.
            </div>
          </div>
          </div>
        </div>
        
        {/* Navigation indicators */}
        <div className="section-indicators">
          {[0, 1, 2, 3, 4, 5].map(index => (
            <div 
              key={index}
              className={`indicator ${activeSection === index ? 'active' : ''}`}
              onClick={() => scrollToSection(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};