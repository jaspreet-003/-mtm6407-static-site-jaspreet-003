import React from "react";
import "./hero.css";

const Hero = ({ image, title, subtitle }) => (
  <div className="hero">
    <img src={image} alt="Hero Background" />
    <div className="hero-text">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  </div>
);

export default Hero;
