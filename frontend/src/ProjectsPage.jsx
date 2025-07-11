import { useNavigate } from "react-router-dom";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "./ProjectsPage.css";

function ProjectsPage() {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "SmartPrep AI",
      description:
        "AI-powered exam preparation with personalized learning paths",
      image: "SPAI.png",
      tags: ["React", "Node.js", "MongoDB"],
      link: "/smartPrepAi",
      github: "#",
    },
    {
      id: 2,
      title: "Quick Cart",
      description: "E-commerce product listing with cart functionality",
      image: "QC.png",
      tags: ["React", "Redux", "CSS"],
      link: "https://quick-cart-app-brown.vercel.app/#",
      github: "#",
    },
    {
      id: 3,
      title: "Restaurant App",
      description: "Menu browsing and food ordering system",
      image: "RA.png",
      tags: ["HTML", "CSS", "JavaScript"],
      link: "/RestaurantApp/home.html",
      github: "#",
    },
    {
      id: 4,
      title: "Budget Tracker",
      description: "Track expenses with visual analytics",
      image: "BT.png",
      tags: ["React", "Chart.js", "Local Storage"],
      link: "https://budget-tracker-app-98ob.vercel.app/#",
      github: "#",
    },
  ];

  const handleProjectClick = (project) => {
    if (project.link.startsWith("http") || project.link.startsWith("/")) {
      window.open(project.link, "_blank");
    } else {
      navigate(project.link);
    }
  };

  return (
    <div className="projects-page">
      <div className="projects-wrapper">
        <div className="section-header">
          <h2 className="section-title">
            My <span className="highlight1">Projects</span>
          </h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => handleProjectClick(project)}
            >
              <div className="card-image-container1">
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-image"
                />
                <div className="card-hover-content">
                  <button className="view-button">
                    View Project <FaExternalLinkAlt className="icon" />
                  </button>
                </div>
              </div>
              <div className="card-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tech-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
