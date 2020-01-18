import React from "react";
import "./Resume.scss";

const resumeData = {
  experience: [
    {
      company: "Vectorform",
      title: "Solutions Engineer I",
      date: "Apr 2019 - Present",
      description:
        "Estimation, planning and implementation of web sites and web applications. Frontend web development primarily in TypeScript, ReactJS, Redux-Saga, Jest."
    },
    {
      company: "Fabiano Brothers",
      title: "Graphic Designer",
      date: "Jan 2018 - Feb 2019",
      desctiption:
        "Develop graphics for promotional materials for retailers of Wanye and Oakland Counties. Apply printed materials to substrates, vinyl to banners and stocking inventory."
    },
    {
      company: "ABC Warehouse",
      title: "Sales Associate",
      date: "Jun 2014 - Feb 2018"
    }
  ],
  education: [
    {
      company: "Grand Circus",
      title: "Front-end Bootcamp",
      date: "Mar 2019",
      description:
        "12 week course designed to provide proficiency in Front-End Development. Disciplines: HTML, CSS, JavaScript, jQuery, Angular.js, Node.js"
    },
    {
      company: "MITx on edX",
      title: "Intro to Computer Science and Programming Using Python",
      date: "Nov 2018"
    },
    {
      company: "Full Sail University",
      title: "B.S. Degree in Graphic Design",
      date: "Jan 2018"
    }
  ]
};

function Resume() {
  return (
    <div className="resume container" id="resume">
      <div className="resume__body">
        <div className="resume__heading">
          <h2>
            <span>Skills</span>
          </h2>
        </div>
        <div className="resume__skills">
          <p>Javascript ES6, TypeScript, React, Angular, HTML5, CSS3, Node, Git/Github/Bitbucket</p>
          <p>User Experience, Sketch, Adobe Illustrator, Adobe Photoshop</p>
        </div>
      </div>
      {Object.keys(resumeData).map(resKey => {
        return (
          <div className="resume__body">
            <div className="resume__heading">
              <h2>
                <span>{resKey}</span>
              </h2>
            </div>
            <div className="resume__desc">
              {resumeData[resKey].map(a => {
                return (
                  <>
                    <h3>{a.company}</h3>
                    <p>
                      {a.title} • {a.date}
                    </p>
                    <p>{a.description && a.description}</p>
                  </>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Resume;
