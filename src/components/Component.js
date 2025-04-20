import React from "react";
import "./Component.css";

export const Component = ({ className, divClassName, text1, variant }) => {
  return (
    <div className={`button-${variant} ${className}`}>
      <div className={`button-text ${divClassName}`}>{text1}</div>
    </div>
  );
};