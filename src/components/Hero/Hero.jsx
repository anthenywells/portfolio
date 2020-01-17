import React from "react";
import "./Hero.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__heading">
        <h1>I'm Antheny Wells</h1>
        <h2>Frontend Developer / Problem Solver</h2>
      </div>
      <div className="hero__arrow">
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
    </div>
  );
}

export default Hero;
