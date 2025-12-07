import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "../styles/navbar.scss";

function Navbar({ HandleClick }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">MyPortfolio</div>
      {/* <div className={`nav-btn ${open ? "open" : ""}`}>
        <button onClick={HandleClick} >
          Dark
        </button>
      </div> */}
      <div className={`nav-links ${open ? "open" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setOpen(false)}>About</Link>
        <Link to="/about" onClick={() => setOpen(false)}>About</Link>
        <Link to="/projects" onClick={() => setOpen(false)}>Projects</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
      </div>

      <div className={`nav-btn ${open ? "" : "open"}`}>
        <button onClick={HandleClick} >
          Dark
        </button>
      </div>
      <div className="menu" onClick={() => setOpen(!open)}>
        {open ? (
          <AiOutlineClose className="menu-icon" />   // show close icon when open
        ) : (
          <AiOutlineMenu className="menu-icon" />    // show menu icon when closed
        )}
      </div>


    </nav>
  );
}

export default Navbar;
