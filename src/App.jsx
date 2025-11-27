import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./styles/global.scss";
import Dashboard from "./pages/Dashboard";

function App() {
  const hideNavbar = location.pathname.startsWith("/dashboard"); 

  return (
    <>      
    <Router>
       {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/dashboard" element={<Dashboard />} >
        
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
       {!hideNavbar && <Footer />}
      
    </Router>
    </>
  )
}

export default App;
