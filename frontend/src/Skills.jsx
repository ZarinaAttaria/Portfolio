import React from "react";
import "./Skills.css";

const Skills = () => {
  const skillsData = [
    { name: "ReactJs", icon: "react (2).png", category: "frontend" },
    { name: "Vite", icon: "vite.svg", category: "tooling" },
    { name: "ExpressJs", icon: "express.png", category: "backend" },
    { name: "NodeJs", icon: "node.png", category: "backend" },
    { name: "Redux", icon: "redux.webp", category: "state" },
    { name: "JavaScript", icon: "javascript.png", category: "language" },
    { name: "MongoDB", icon: "mongodb.png", category: "database" },
    { name: "CSS3", icon: "css.webp", category: "styling" },
    { name: "HTML5", icon: "html.png", category: "markup" },
    { name: "Bootstrap", icon: "bootstrap.png", category: "styling" },
    { name: "GitHub", icon: "github.png", category: "tooling" },
    { name: "MySQL", icon: "mysql.png", category: "database" },
    { name: "C++", icon: "cplus.png", category: "language" },
  ];

  return (
    <div className="skills-page">
      <div className="skills-wrapper">
        <div className="skills-heading">
         
          <div className="skills-title-container">
            <h1 className="skills-title">Skills &</h1>
            <h1 className="skills-title abilities">Abilities</h1>
          </div>
        </div>

        <div className="skills-container">
          <div className="skills-grid">
            {skillsData.map((skill, index) => (
              <div
                className={`skill-card ${skill.category}`}
                key={index}
                data-category={skill.category}
              >
                <div className="skill-icon-container">
                  <img
                    src={skill.icon}
                    className="skill-icon"
                    alt={skill.name}
                  />
                </div>
                <div className="skill-name">{skill.name}</div>
                <div className="skill-category">{skill.category}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
