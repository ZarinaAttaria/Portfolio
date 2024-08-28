import React from "react";
import "./Skills.css";
const skills = [
  { name: "JavaScript", level: 50 },
  { name: "React", level: 60 },
  { name: "Redux Toolkit", level: 80 },
  { name: "CSS", level: 75 },
  { name: "HTML", level: 80 },
  { name: "Ant Design", level: 60 },
];

const Skills = () => {
  return (
    <div className="skills-page">
      <div className="skills-container">
        <h1 className="skills-title">My Skills</h1>
        {skills.map((skill) => (
          <div key={skill.name} className="skill-item">
            <div className="skill-name">{skill.name}</div>
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: `${skill.level}%` }}
              >
                {skill.level}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
