import React from "react";
import TopNav from "../../components/TopNav/TopNav";
import Socials from "../../components/common/Socials/Socials"
import "./Hero.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Link, animateScroll as scroll } from "react-scroll";

function Hero() {
  return (
    <div className="hero" id="home">
      <TopNav />
      <div className="hero__heading">
        <h1>Antheny Wells</h1>
        <h2>Frontend Developer</h2>
        <Socials/>
      </div>
      <div className="hero__arrow">
        <Link to="about" smooth={true} duration={500}>
          <FontAwesomeIcon icon={faAngleDown} />
        </Link>
      </div>
    </div>
  );
}

export default Hero;
