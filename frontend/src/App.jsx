import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProjectsPage from "./ProjectsPage";
import HomePage from "./HomePage";
import About from "./About.jsx";
import Navbar from "./Navbar.jsx";
import Skills from "./Skills.jsx";
import Education from "./Education.jsx";
import Contact from "./Contact.jsx";
import SmartPrepAI from "./SmartPrepAI.jsx";
import Footer from "./footer.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomePage />
              <Footer />
            </>
          }
        />
        <Route path="/smartPrepAi" element={<SmartPrepAI />} />
      </Routes>
    </>
  );
}

export default App;
