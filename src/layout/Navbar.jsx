import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/ok.jpg";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <nav className="navbar">

        {/* LOGO */}
        <div className="navbar-brand">
          <Link to="/" onClick={closeMenu}>
            <img
              src={logo}
              alt="Amiaka Kingsley logo"
              className="navbar-logo"
            />
          </Link>
          <span className="brand-name">Amiaka Kingsley</span>
        </div>

        {/* NAV LINKS */}
        <ul className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <li>
            <Link to="/" onClick={closeMenu}>Home</Link>
          </li>

          <li>
            <Link to="/explore" onClick={closeMenu}>Explore</Link>
          </li>

          <li>
            <Link to="/components" onClick={closeMenu}>Components</Link>
          </li>

          <li>
            <Link to="/contact" onClick={closeMenu}>Contact</Link>
          </li>
        </ul>

        {/* MOBILE TOGGLE */}
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

      </nav>
    </header>
  );
}

export default Navbar;
