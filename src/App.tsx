import "./App.css";
import TestetComponent from "./components/TestetComponent.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./pages/aboutMe.tsx";
import Home from "./pages/HomePage.tsx";
import Projects from "./pages/Projects.tsx";
import Experience from "./pages/ExperiencePage.tsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/aboutme" Component={AboutMe} />
        <Route path="/projects" Component={Projects} />
        <Route path="/experience" Component={Experience} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
