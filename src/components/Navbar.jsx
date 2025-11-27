import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.scss";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    // Normally you'd call your backend and get user info
    setUser({ name: "John Doe" });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <nav className="navbar">
      <div className="logo">MyPortfolio</div>

      <div className={`nav-links ${open ? "open" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setOpen(false)}>About</Link>
        <Link to="/about" onClick={() => setOpen(false)}>About</Link>
        <Link to="/projects" onClick={() => setOpen(false)}>Projects</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
      </div>

      <div className={`hamburger ${open ? "active" : ""}`} onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
