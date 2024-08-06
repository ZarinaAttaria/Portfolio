import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProjectsPage from "./ProjectsPage";
import HomePage from "./HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projectsPage/*" element={<ProjectsPage />} />
      </Routes>
    </>
  );
}

export default App;
