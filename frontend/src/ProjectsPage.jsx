import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";

function ProjectsPage() {
  const navigate = useNavigate();

  return (
    <div className="projects-container">
      <div className="projects-grid">
        <div className="Project-title-container">
          <img
            className="about-image"
            src="data:image/png;base64,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"
          />
          <h1 className="project-title">My </h1>
          <h1 className="project-title mee">Projects</h1>
        </div>
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
