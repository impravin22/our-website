import React from "react";
import { Navbar } from "../components/Navbar";
import { Section } from "../components/Section";
import { ContentSection } from "../components/ContentSection";
import { FeatureSection } from "../components/FeatureSection";
import { CtaSection } from "../components/CtaSection";
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";

function Home() {
  // Function to scroll to contact form
  const scrollToContact = () => {
    document.getElementById('contact-form').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="home-page">
      <Navbar />
      <Section scrollToContact={scrollToContact} />
      <ContentSection scrollToContact={scrollToContact} />
      <FeatureSection scrollToContact={scrollToContact} />
      <CtaSection scrollToContact={scrollToContact} />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Home;