import React from "react";
import "./HomePage.css";
import { ReactTyped } from "react-typed";
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaGithub,
} from "react-icons/fa";
import Navbar from "./Navbar";
import ProjectsPage from "./ProjectsPage";
import About from "./About";
import Contact from "./Contact";
import Skills from "./Skills";
import Education from "./Education";
import Footer from "./footer";
function HomePage() {
  return (
    <div className="portfolio-container">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="intro-text">
              <h2 className="greeting">Hello, It's me</h2>
              <div className="name-container">
                <ReactTyped
                  strings={["Zarina Attaria"]}
                  typeSpeed={100}
                  className="name"
                  cursorChar=""
                />
              </div>
              <div className="title-container">
                <h3 className="title-prefix">I am a</h3>
                <ReactTyped
                  strings={[
                    "Web Developer",
                    "MERN Stack Developer",
                    "Frontend Developer",
                    "Software Engineer",
                  ]}
                  typeSpeed={100}
                  backSpeed={50}
                  loop
                  className="title"
                  cursorChar="|"
                />
              </div>
            </div>

            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/zarina-attaria-a2134427a"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaLinkedin className="social-icon" />
              </a>
              <a
                href="https://x.com/Zareena1664709"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaTwitter className="social-icon" />
              </a>
              <a
                href="https://github.com/ZarinaAttaria"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaGithub className="social-icon" />
              </a>
              <a
                href="https://www.instagram.com/zzareena__"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaInstagram className="social-icon" />
              </a>
              <a
                href="mailto:zarinaattaria135@gmail.com"
                className="social-link"
              >
                <FaEnvelope className="social-icon" />
              </a>
            </div>

            <a href="#about" className="cta-button">
              Explore My Work
            </a>
          </div>

          <div className="hero-image-container">
            <div className="image-wrapper">
              <img
                src="myPhoto.png"
                className="hero-image"
                alt="Zarina Attaria"
              />
              <div className="image-border"></div>
              <div className="image-dots"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>
      {/* Projects Section */}
      <section id="projects">
        <ProjectsPage />
      </section>
      {/* Skills Section */}
      <section id="skills">
        <Skills />
      </section>

      {/* Education Section */}
      <section id="education">
        <Education />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default HomePage;
