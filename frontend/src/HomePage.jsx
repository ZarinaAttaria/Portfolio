import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import { ReactTyped } from "react-typed";
import { Route, Routes } from "react-router-dom";
import ProjectsPage from "./ProjectsPage";
import About from "./About";
import Contact from "./Contact";
import Skills from "./Skills";
import Education from "./Education";
import Footer from "./footer";

function HomePage() {
  return (
    <>
      <Navbar />

      <div id="home">
        <div className="introContainer">
          <div className="intro">
            <h2 className="hello_heading">Hello, It's me </h2>
            <ReactTyped
              strings={["Zarina Attaria"]}
              typeSpeed={100}
              className="name_Heading"
            />
            <div className="dev_Container">
              <h3 className="i_am_heading">I am a </h3>
              <ReactTyped
                strings={["Web Developer"]}
                typeSpeed={100}
                className="dev_Heading"
              />
            </div>

            <div className="iconsLinks">
              <a
                href="https://www.linkedin.com/in/zarina-attaria-a2134427a"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="linkedin.png" className="icon1" />
              </a>
              <a
                href="https://x.com/Zareena1664709?t=clCbsgtgqWxROc2Ot3QHIg&s=09"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="twitter.png" className="icon1" />
              </a>

              <a
                href="https://www.instagram.com/zzareena__/?igsh=enVpZGFqazI5bWVq"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="instagram (1).png" className="icon1" />
              </a>
              <a href="mailto:zarinaattaria135@gmail.com" aria-label="Email">
                <img src="mail.png" className="icon1" />
              </a>
            </div>
          </div>
          <div className="myPhotoContainer">
            <img src="myPhoto.png" className="myPhoto" />
          </div>
        </div>
        <div>
          <section id="about">
            <About />
          </section>
          <section id="projects">
            <ProjectsPage />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="education">
            <Education />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
      </div>
    </>
  );
}

export default HomePage;
