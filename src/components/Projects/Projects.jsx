import React from "react";
import "./Projects.scss";

const projectData = [
  {
    title: "Events App",
    githubLink: "https://github.com/anthenywells/events-app",
    img: "events-app",
  },
  {
    title: "Angular ToDo",
    githubLink: "https://github.com/anthenywells/todo-list",
    img: "angular-todo",
  },
  {
    title: "Museum of Candy",
    githubLink: "https://github.com/anthenywells/museum-of-candy",
    img: "musuem-of-candy",
  },
];

function Projects() {
  return (
    <div className="projects container">
      <div className="projects__body">
        {projectData.map((p) => {
          return (
            <div className="projects__card" key={p}>
              <img src={require(`../../assets/projects/${p.img}.jpg`)} alt="" />
              <div className="projects__card__overlay">
                <a href={p.githubLink}><p>{p.title}</p></a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
