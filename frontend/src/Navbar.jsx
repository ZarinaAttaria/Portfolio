import React from "react";
import { Link } from "react-scroll";
function Navbar() {
  return (
    <nav className="navbar home-navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand navbar-portfolio" href="#">
          Zarina Attaria
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">☰</span>
        </button>
        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="home" smooth={true} duration={500} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="nav-link"
                offset={-70}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="nav-link"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="nav-link"
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="education"
                smooth={true}
                duration={500}
                className="nav-link"
              >
                Education
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="nav-link"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
