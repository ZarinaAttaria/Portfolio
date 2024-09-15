import React from "react";
import "./About.css";
import { BiDownload, BiMailSend, BiPhoneCall } from "react-icons/bi";

const About = () => {
  return (
    <div className="about-page">
      <div>
        <div className="about-heading">
          <img
            className="about-image"
            src="https://img.icons8.com/?size=100&id=68763&format=png&color=000000"
          />
          <h1 className="about-title">About </h1>
          <h1 className="about-title me">Me</h1>
        </div>
        <div className="about-container">
          <div className="about-content">
            <img src="myPhoto.jfif" className="myPicture" />
            <div className="about-description-container">
              <h4>I am Zarina!</h4>
              <h6>Full Stack Developer</h6>
              <p className="about-description">
                I’m a passionate Mern Stack Developer with a keen interest in
                creating dynamic and user-friendly web applications. With
                experience in React, Redux Toolkit, and various UI libraries, I
                strive to build intuitive and engaging experiences. I love
                tackling new challenges and continuously learning to stay ahead
                in the tech world. Feel free to explore my projects and get in
                touch if you’d like to collaborate or just chat about
                technology!
              </p>
              <p className="mt-3">
                <BiMailSend className="icon2" /> : zarinaattaria135@gmail.com
              </p>
              <p className="mt-3">
                <BiPhoneCall className="icon2" /> : 0313-5341176
              </p>
              <a
                href="/CV (Zarina Attaria).pdf"
                download
                className="download-cv-button"
              >
                {" "}
                <BiDownload className="download-icon" /> RESUME
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
