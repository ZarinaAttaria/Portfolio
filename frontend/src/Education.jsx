import React from "react";
import "./Education.css";

const education = [
  {
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIFrNfujawgU7HSQXl1xt4jAsFigl9K12GGg&s",
    institution: "Bahria University",
    degree: "Bachelor of Science in Software Engineering",
    period: "2021 - 2025 | Pursuing",
  },
  {
    picture:
      "https://lh5.googleusercontent.com/p/AF1QipM-moVXGfNqCdJzfzYiVBulGpsnlNjRd_IVmsTP=w408-h320-k-no",
    institution: "Punjab College",
    degree: "Higher Secondary School Certificate",
    period: "2019 - 2021 | Completed",
  },
];

const Education = () => {
  return (
    <div className="education-page">
      <div className="education-container">
        <div className="myedu-heading">
          <img src="Education.png" className="edu-logo" />
          <h1 className="education-title">My </h1>
          <h1 className="education-title title1">Education</h1>
        </div>
        <p className="education-para">
          Education is not the learning of facts, but the training of the mind
          to think.
        </p>
        {education.map((edu, index) => (
          <div key={index} className="education-item ">
            <img src={edu.picture} className="institution-image" />
            <div>
              <h2 className="education-institution">{edu.institution}</h2>
              <p className="education-degree">{edu.degree}</p>
              <p className="education-period">{edu.period}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
