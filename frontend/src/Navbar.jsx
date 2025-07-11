import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="navbar-brand"
          onClick={closeMobileMenu}
        >
          <span className="name-highlight">Zarina</span> Attaria
        </Link>

        <button
          className={`navbar-toggler ${mobileMenuOpen ? "open" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
        >
          <span className="toggler-icon"></span>
          <span className="toggler-icon"></span>
          <span className="toggler-icon"></span>
        </button>

        <div className={`navbar-menu ${mobileMenuOpen ? "open" : ""}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={closeMobileMenu}
                spy={true}
                activeClass="active"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={closeMobileMenu}
                spy={true}
                activeClass="active"
                offset={-80}
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
                onClick={closeMobileMenu}
                spy={true}
                activeClass="active"
                offset={-80}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={closeMobileMenu}
                spy={true}
                activeClass="active"
                offset={-80}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="education"
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={closeMobileMenu}
                spy={true}
                activeClass="active"
                offset={-80}
              >
                Education
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="nav-link contact-link"
                onClick={closeMobileMenu}
                spy={true}
                activeClass="active"
                offset={-80}
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
