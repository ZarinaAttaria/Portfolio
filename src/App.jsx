import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProjectsPage from "./ProjectsPage";
import HomePage from "./HomePage";
import About from "./About.jsx";
import Navbar from "./Navbar.jsx";
import Skills from "./Skills.jsx";
import Education from "./Education.jsx";
import Contact from "./Contact.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projectsPage/*" element={<ProjectsPage />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
