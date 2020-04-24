import React from "react";
import "./TopNav.scss";
import { Link, animateScroll as scroll } from "react-scroll";

function TopNav() {
  const navLinks = ["home", "about", "resume", "projects", "contact"];
  return (
    <div className="top-nav">
      {navLinks.map(link => {
        return (
          <Link
            key={link}
            activeClass="active"
            to={link}
            spy={true}
            smooth={true}
            duration={500}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}

export default TopNav;
