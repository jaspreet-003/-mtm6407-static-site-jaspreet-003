import React, { useState } from "react";
import { Link } from "gatsby";
import "./layout.css";

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="site">
      <header>
        <div className="container">
          <div className="logo">
            <Link to="/">My Fashion Website</Link>
          </div>
          <button className="menu-toggle" onClick={toggleMenu}>
            ☰
          </button>
          <nav>
            <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/fashion-trends">Fashion Trends</Link></li>
              <li><Link to="/fashion-tips">Fashion Tips</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="container site-content">{children}</main>
      <footer>
        <div className="container footer-content">
          <p>&copy; 2024 My Fashion Website. All Rights Reserved.</p>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/fashion-trends">Fashion Trends</Link></li>
              <li><Link to="/fashion-tips">Fashion Tips</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
