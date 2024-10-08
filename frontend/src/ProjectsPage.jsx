import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./App.css";

// import Restaurant from "./RestaurantApp";

import Navbar from "./Navbar";

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
    <>
      <div className="content-container">
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

        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <div className="default-message ">
                  Please select a project from the sidebar.
                </div>
              }
            />
            <Route
              path="counterApp"
              element={
                <iframe
                  src="https://counter-app-opal-one.vercel.app"
                  title="W3Schools Free Online Web Tutorials"
                  style={{ width: "100%", height: "100vh", border: "none" }}
                ></iframe>
              }
            />
            <Route
              path="npmPackagesComparator"
              element={
                <iframe
                  src=" https://packages-comparator.vercel.app"
                  title="W3Schools Free Online Web Tutorials"
                  style={{ width: "100%", height: "100vh", border: "none" }}
                ></iframe>
              }
            />
            {/* <Route path="productsApp/*" element={<ProductsApp />} /> */}
            <Route
              path="budgetTracker/*"
              element={
                <iframe
                  src="https://budget-tracker-app-8au2.vercel.app"
                  style={{ width: "100%", height: "100vh", border: "none" }}
                ></iframe>
              }
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default ProjectsPage;
