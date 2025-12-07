import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Profile from "./pages/Profile"
import Contact from "./pages/Contact";
// import "./styles/_themes.scss";
import "./styles/global.scss";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>      
    <Router>
      <AppRoutes />
    </Router>
    </>
  )
}


function AppRoutes() {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith("/dashboard");
  const [theme, setTheme] = useState("light");

  const handleClick = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <div className={`theme-${theme}`}>
      {!hideNavbar && <Navbar HandleClick={handleClick} />}
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {!hideNavbar && <Footer />}
    </div>
  );
}

export default App;
