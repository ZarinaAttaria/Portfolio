import {
  Link,
  Route,
  Routes,
  useLocation,
  useMatch,
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

function ProjectsPage({ match }) {
  const { pathname } = useLocation();
  console.log("🚀 ~ Location:", pathname);

  const navigate = useNavigate();
  const getClass = (path) => {
    let __class = ["sidebar-item"];
    if (`/projectsPage/${path}` === pathname) __class.push("bg-info");
    return __class.join(" ");
  };
  return (
    <>
      <Navbar />

      <div className="content-container">
        <div className="sidebar">
          <hr />
          {SIDE_MENU.map((item) => (
            <Link to={item.to} className={getClass(item.to)}>
              {item.label}
            </Link>
          ))}
          <div
            className={getClass(SIDE_MENU[0].to)}
            onClick={() => navigate(SIDE_MENU[0].to)}
          >
            {SIDE_MENU[0].label}
          </div>
          {/*           
          <Link to="counterApp" className={getClass("/counterApp")}>
            Counter App
          </Link>
          <Link to="npmPackagesComparator" className={getClass("/counterApp")}>
            Npm Comparator
          </Link>
          <Link to="productsApp" className={getClass("/counterApp")}>
            Products App
          </Link> */}
        </div>
        <div className="content">
          <Routes>
            <Route path="counterApp" element={<CounterApp />} />
            <Route
              path="npmPackagesComparator"
              element={<PackagesComparator />}
            ></Route>
            <Route path="productsApp" element={<ProductsApp />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default ProjectsPage;
