import React from "react";
import "./About.scss";
import ProfilePic from "../../assets/profile_pic.jpg";
import Resume from "../../assets/antheny_wells_resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <div className="about container" id="about">
      <div className="about__body">
        <div className="about__pic">
          <img src={ProfilePic} alt="Profile Picture" />
        </div>
        <div className="about__desc">
          <h2>About</h2>
          <p>
            Experienced Graphic Designer turned Web Developer. Strong arts and
            design background with an obsession for technology and innovation.
            Skilled in many programming languages with a focus of Front-end
            Development in Javascript and ReactJS.
          </p>
          <div className="about__desc-location">
            <h2>Location</h2>
            <p>Detroit, MI </p>
          </div>
          <div className="about__desc-download">
            <a href={Resume} download>
              <FontAwesomeIcon icon={faFileDownload} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
