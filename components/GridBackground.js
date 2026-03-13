import React from "react";
import "./GridBackground.css";

const GridBackground = ({ children }) => {
  return (
    <div className="grid-background">
      <div className="grid-background__layer" aria-hidden="true" />
      <div className="grid-background__content">{children}</div>
    </div>
  );
};

export default GridBackground;
