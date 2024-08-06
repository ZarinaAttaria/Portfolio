import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import CounterApp from "./CounterApp/App";
import PackagesComparator from "./NpmPackagesComparator/App";
import ProductsApp from "./ProductsApp/App";

function ProjectsPage() {
  return (
    <>
      <h1 className="sidebarList">List of My projects</h1>

      <div className="content-container">
        <div className="sidebar">
          <h1>
            <Link to="counterApp">Counter App</Link>
          </h1>
          <h1>
            <Link to="npmPackagesComparator">Npm Packages Comparator App</Link>
          </h1>
          <h1>
            <Link to="productsApp">Products App</Link>
          </h1>
        </div>
        <div className="content">
          <Routes>
            <Route path="counterApp" element={<CounterApp />} />
            <Route
              path="npmPackagesComparator"
              element={<PackagesComparator />}
            />
            <Route path="productsApp" element={<ProductsApp />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default ProjectsPage;
