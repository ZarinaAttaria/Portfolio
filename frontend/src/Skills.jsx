import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills-page">
      <div>
        <div className="skills-heading">
          <img src="skills.png" className="skills-logo" />
          <h1 className="skills-title">Skills & </h1>
          <h1 className="skills-title abilities">Abilities</h1>
        </div>
        <div className="skills-container">
          <div className="skills-Items-container">
            <div className="skills-Item">
              <img src="react (2).png" className="skill-logo" />
              <p>ReactJs</p>
            </div>
            <div className="skills-Item">
              <img src="vite.svg" className="vite-logo" />
              <p className="unity">Vite</p>
            </div>
            <div className="skills-Item">
              <img src="express.png" className=" express-logo" />
              <p className="unity">ExpressJs</p>
            </div>{" "}
            <div className="skills-Item">
              <img src="node.png" className="skill-logo" />
              <p className="nodejs">NodeJs</p>
            </div>{" "}
            <div className="skills-Item">
              <img src="redux.webp" className="redux-logo" />
              <p className="unity">Redux</p>
            </div>
            <div className="skills-Item">
              <img src="javascript.png" className="javascript-logo" />
              <p className="unity">Javascript</p>
            </div>
            <div className="skills-Item">
              <img src="mongodb.png" className="mongodb-logo" />
              <p>MongoDb</p>
            </div>
            <div className="skills-Item">
              <img src="css.webp" className=" express-logo" />
              <p className="unity">CSS3</p>
            </div>{" "}
            <div className="skills-Item">
              <img src="html.png" className="html-logo" />
              <p className="unity">HTML</p>
            </div>{" "}
            <div className="skills-Item">
              <img src="bootstrap.png" className="bootstrap-logo" />
              <p>Bootstrap</p>
            </div>
            <div className="skills-Item">
              <img src="github.png" className="skill-logo" />
              <p>Github</p>
            </div>
            <div className="skills-Item">
              <img src="mysql.png" className="mysql-logo" />
              <p className="unity">MySql</p>
            </div>
            <div className="skills-Item">
              <img src="cplus.png" className="cplus-logo" />
              <p>C++</p>
            </div>
            <div className="skills-Item">
              <img src="java.png" className="java-logo" />
              <p>Java</p>
            </div>
            <div className="skills-Item">
              <img src="Unity.png" className="skill-logo" />
              <p className="unity">Unity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
