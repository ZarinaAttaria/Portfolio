import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./App.css";

const SIDE_MENU = [
  { to: "counterApp", label: "Counter App" },
  { to: "npmPackagesComparator", label: "NPM Comparator" },
  { to: "productsApp", label: "Product App" },
  { to: "budgetTracker", label: "Budget Tracker App" },
  {
    to: "/RestaurantApp/home.html",
    label: "Restaurant App",
    isExternal: true,
  },
  { to: "smartPrepAi", label: "SmartPrep AI" },
];

function ProjectsPage() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const getClass = (path) => {
    let __class = ["sidebar-item"];
    if (`/projectsPage/${path}` === pathname) __class.push("bg-info");
    return __class.join(" ");
  };

  return (
    <div className="projects-container">
      <div className="sidebar">
        <hr />
        {SIDE_MENU.map((item) =>
          item.isExternal ? (
            <a
              href={item.to}
              className={getClass(item.to)}
              key={item.to}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.label}
            </a>
          ) : (
            <Link to={item.to} className={getClass(item.to)} key={item.to}>
              {item.label}
            </Link>
          )
        )}
      </div>

      <div className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <div className="default-message">
                Please select a project from the sidebar.
              </div>
            }
          />
          {/* Other routes... */}
          <Route
            path="smartPrepAi"
            element={
              <div className="video-wrapper">
                <div className="video-container">
                  <video
                    controls
                    className="responsive-video"
                    src="/videos/smartPrepAI.mp4"
                  />
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default ProjectsPage;
