import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";

function ProjectsPage() {
  const navigate = useNavigate();

  return (
    <div className="projects-container">
      <div className="projects-grid">
        <h2 className="projects-title">My Projects</h2>
        <div className="projects-list">
          <div
            className="project-card"
            onClick={() => navigate("/smartPrepAi")}
          >
            <img src="SPAI.png" className="card-image" alt="SmartPrep AI" />
            <h3>SmartPrep AI</h3>
            <p>AI-powered exam preparation</p>

            <button className="view-project-btn">View Project</button>
          </div>

          <div
            className="project-card"
            onClick={() =>
              window.open("https://quick-cart-app-brown.vercel.app/#", "_blank")
            }
          >
            <img src="QC.png" className="card-image" alt="Quick Cart" />
            <h3>Quick Cart</h3>
            <p>E-commerce product listing</p>
            <button className="view-project-btn">View Project</button>
          </div>

          <div
            className="project-card"
            onClick={() => window.open("/RestaurantApp/home.html", "_blank")}
          >
            <img src="RA.png" className="card-image" alt="Restaurant App" />
            <h3>Restaurant App</h3>
            <p>Restaurant menu and ordering</p>
            <button className="view-project-btn">View Project</button>
          </div>

          <div
            className="project-card"
            onClick={() =>
              window.open(
                "https://budget-tracker-app-98ob.vercel.app/#",
                "_blank"
              )
            }
          >
            <img src="BT.png" className="card-image" alt="Budget Tracker" />
            <h3>Budget Tracker App</h3>
            <p>Track your expenses</p>
            <button className="view-project-btn">View Project</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
