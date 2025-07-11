import React from "react";
import "./About.css";
import { BiDownload, BiMailSend, BiPhoneCall } from "react-icons/bi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-wrapper">
        <div className="about-heading">
          <div className="title-container">
            <h1 className="about-title">About</h1>
            <h1 className="about-title me">Me</h1>
          </div>
        </div>

        <div className="about-container">
          <div className="about-content">
            <div className="image-container">
              <img src="me.png" className="myPicture" alt="Zarina Attaria" />
            </div>

            <div className="about-description-container">
              <div className="text-content">
                <h4 className="greeting">
                  Hello, I am <span>Zarina Attaria</span>
                </h4>
                <h6 className="job-title">Full Stack Developer</h6>
                <div className="divider"></div>
                <p className="about-description">
                  I'm a passionate MERN Stack Developer with a keen interest in
                  creating dynamic and user-friendly web applications. With
                  experience in React, Redux Toolkit, and various UI libraries,
                  I strive to build intuitive and engaging experiences. I love
                  tackling new challenges and continuously learning to stay
                  ahead in the tech world.
                </p>
                <p className="about-description">
                  When I'm not coding, you can find me exploring new
                  technologies, contributing to open source.
                </p>

                <div className="contact-info">
                  <div className="contact-item">
                    <BiMailSend className="icon2" />
                    <span>zarinaattaria135@gmail.com</span>
                  </div>
                  <div className="contact-item">
                    <BiPhoneCall className="icon2" />
                    <span>0313-5341176</span>
                  </div>
                </div>

                <a
                  href="/Zarina Attaria Resume.pdf"
                  download
                  className="download-cv-button"
                >
                  <BiDownload className="download-icon" />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
