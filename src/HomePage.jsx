import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import { ReactTyped } from "react-typed";

function HomePage() {
  return (
    <>
      <div className="intro">
        <h2>Hello, It's me </h2>
        <ReactTyped
          strings={["Zarina Attaria"]}
          typeSpeed={100}
          className="name_Heading"
        />
        <div className="dev_Container">
          <h3 className="i_am_heading">I am a </h3>
          <ReactTyped
            strings={["Frontend Developer"]}
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
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="twitter.png" className="icon1" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="facebook.png" className="icon1" />
          </a>
          <a
            href="https://www.instagram.com/zzareena__/?igsh=enVpZGFqazI5bWVq"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="instagram (1).png" className="icon1" />
          </a>
        </div>
      </div>
    </>
  );
}

export default HomePage;
