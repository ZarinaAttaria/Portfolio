import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import CounterApp from "./CounterApp/App";
import PackagesComparator from "./NpmPackagesComparator/App";
import ProductsApp from "./ProductsApp/App";
import Navbar from "./Navbar";

const SIDE_MENU = [
  { to: "counterApp", label: "Counter App" },
  { to: "npmPackagesComparator", label: "NPM Comparator" },
  { to: "productsApp", label: "Product App" },
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
          {SIDE_MENU.map((item) => (
            <Link to={item.to} className={getClass(item.to)} key={item.to}>
              {item.label}
            </Link>
          ))}
          {/* <div
            className={getClass(SIDE_MENU[0].to)}
            onClick={() => navigate(SIDE_MENU[0].to)}
          >
            {SIDE_MENU[0].label}
          </div>
          <div
            className={getClass(SIDE_MENU[1].to)}
            onClick={() => navigate(SIDE_MENU[1].to)}
          >
            {SIDE_MENU[1].label}
          </div> */}
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
            <Route path="counterApp" element={<CounterApp />} />
            <Route
              path="npmPackagesComparator"
              element={<PackagesComparator />}
            />
            <Route path="productsApp/*" element={<ProductsApp />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default ProjectsPage;
