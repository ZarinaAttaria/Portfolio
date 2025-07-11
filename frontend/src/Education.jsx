import React from "react";
import "./Education.css";

const education = [
  {
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIFrNfujawgU7HSQXl1xt4jAsFigl9K12GGg&s",
    institution: "Bahria University",
    degree: "Bachelor of Science in Software Engineering",
    period: "2021 - 2025 | Completed",
    description:
      "Specialized in full-stack web development, software architecture, and database systems. Graduated with honors.",
  },
];

const Education = () => {
  return (
    <div className="education-page">
      <div className="education-wrapper">
        <div className="education-heading">
          <div className="education-title-container">
            <h1 className="education-title">My</h1>
            <h1 className="education-title highlight">Education</h1>
          </div>
        </div>

        <div className="education-cards">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="card-image-container">
                <img
                  src={edu.picture}
                  className="institution-image"
                  alt={edu.institution}
                />
                <div className="image-overlay"></div>
              </div>
              <div className="card-content">
                <h2 className="institution-name">{edu.institution}</h2>
                <div className="education-divider"></div>
                <p className="degree-name">{edu.degree}</p>
                <p className="education-period">
                  <span className="period-icon">📅</span> {edu.period}
                </p>
                <p className="education-description">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
