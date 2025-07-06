import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="portfolio-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="home">Home</Link>
            </li>
            <li>
              <Link to="projects">Projects</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Connect With Me</h3>
          <div className="social-icons">
            <a
              href="https://github.com/ZarinaAttaria"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/zarina-attaria-a2134427a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="icon" />
            </a>
            <a
              href="https://x.com/Zareena1664709?t=clCbsgtgqWxROc2Ot3QHIg&s=09"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="icon" />
            </a>
            <a href="mailto:zarinaattaria135@gmail.com" aria-label="Email">
              <FaEnvelope className="icon" />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Get In Touch</h3>
          <p>Have a project in mind or want to collaborate?</p>
          <button className="contact-btn">
            <Link to="contact"> Contact Me</Link>
          </button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Zarina Attaria. All rights reserved.</p>
        <p>Built with React and ❤️</p>
      </div>
    </footer>
  );
};

export default Footer;
