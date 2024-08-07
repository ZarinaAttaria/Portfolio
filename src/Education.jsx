import React from "react";
import "./Education.css";

const education = [
  {
    institution: "Bahria University",
    degree: "Bachelor of Science in Software Engineering",
    period: "2021 - 2025",
  },
  {
    institution: "Punjab College",
    degree: "Higher Secondary School Certificate",
    period: "2019 - 2021",
  },
];

const Education = () => {
  return (
    <div className="education-page">
      <div className="education-container">
        <h1 className="education-title">My Education</h1>
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <h2 className="education-institution">{edu.institution}</h2>
            <p className="education-degree">{edu.degree}</p>
            <p className="education-period">{edu.period}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
