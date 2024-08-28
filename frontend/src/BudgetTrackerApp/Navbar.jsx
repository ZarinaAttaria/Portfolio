import "./Navbar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const email = localStorage.getItem("email");
  const token = localStorage.getItem("token");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");

    setIsOpen(false);

    navigate("/projectsPage/budgetTracker/login");
  };
  const handleSignUp = () => {
    navigate("/");
  };
  return (
    <div className="navbar budgetTrackerNavbar">
      <div className="navbarStart">
        <img src="/logo.png" className="logo" alt="Logo" />
        <a href="/projectsPage/budgetTracker" className="budgetTrackerLink">
          Budget Tracker
        </a>
        <div className="user-menu">
          <button className="user-logo" onClick={toggleDropdown}>
            <img src="/user.png" alt="User Logo" className="logo" />
          </button>
          {isOpen && (
            <div className="dropdown-menu">
              {email && <p className="email">{email}</p>}

              {token ? (
                <a href="#" onClick={handleLogout}>
                  Logout
                </a>
              ) : (
                <a
                  href="/projectsPage/budgetTracker"
                  className="signup"
                  onClick={handleSignUp}
                >
                  Sign Up
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
