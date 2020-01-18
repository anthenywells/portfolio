import React from "react";
import "./Hero.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__heading">
        <h1>Antheny Wells</h1>
        <h2>Frontend Developer / Problem Solver</h2>
        <div className="hero__socials">
          <a href="#">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          <a href="#">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
      <div className="hero__arrow">
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
    </div>
  );
}

export default Hero;
