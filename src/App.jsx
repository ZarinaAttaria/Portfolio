import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProjectsPage from "./ProjectsPage";
import HomePage from "./HomePage";
import About from "./About.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projectsPage/*" element={<ProjectsPage />} />
        <Route path="/about/*" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
