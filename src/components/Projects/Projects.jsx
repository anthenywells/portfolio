import React from "react";
import "./Projects.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const projectData = [
  {
    title: "Title",
    blurb:
      "blur bblurb blurbblurb blurbblur bblurb blurbbl urbblurb blurb blurbblurbblurb",
    githubLink: "https://www.github.com",
    demoLink: "google.com",
    img: "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"
  },
  {
    title: "Title",
    blurb:
      "blurb  blurbblu rbblurbb lurbb lurb blur bblurbblu rbblur  bblurbblurbblurb blurb",
    githubLink: "github.com",
    demoLink: "google.com",
    img: "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"
  },
  {
    title: "Title",
    blurb:
      "blur bblurb blurbblu rbblurbbl urbblurb blurbb lurbblur bblur bblurbbl urbblurb",
    githubLink: "github.com",
    demoLink: "google.com",
    img: "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"
  }
];

function Projects() {
  return (
    <div className="projects container">
      <div className="projects__body">
        {projectData.map(p => {
          return (
            <div className="projects__card" key={p}>
              <img src={p.img} alt="" />
              <div className="projects__card-body">
                <h5>{p.title}</h5>
                <p>{p.blurb}</p>
                <a href={p.demoLink}>
                  <FontAwesomeIcon icon={faGlobe} />
                </a>
                <a href={p.githubLink}>
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
