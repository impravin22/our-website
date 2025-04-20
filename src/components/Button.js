import React from "react";
import "./Button.css";

export const Button = ({ text, className, size, onClick }) => {
  // Convert the text to Title Case
  const formattedText = text
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

  return (
    <button 
      className={`common-button ${size === 'small' ? 'small' : ''} ${className || ''}`}
      onClick={onClick}
    >
      <div className="common-button-text">{formattedText}</div>
    </button>
  );
};