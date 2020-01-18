import React from "react";
import "./Socials.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Socials() {
  return (
    <div className="socials">
      <a href="https://www.linkedin.com/in/antheny/">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://github.com/anthenywells/">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
}

export default Socials;
