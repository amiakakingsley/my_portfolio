import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "./../assets/images/ok.jpg";
import "./Navbar.css";

function Navbar() {
  const [isVisible, setVisible] = useState(false);

  const toggleMenu = () => {
    setVisible(!isVisible);
  };

  return (
    <div className="header">
      <div className="nav_logo1">
        <Link to={"/"}><img className="nav_logo" src={logo} alt="logo" /></Link>
        <h1>About me</h1>
      </div>

      <div className={`nav_links ${isVisible ? 'mobile_active' : ''}`}>
        <ul className="nav_link2">
          <li>  <Link to={"/"} onClick={toggleMenu}>Home</Link></li>
          <li><Link to={"/explore"} onClick={toggleMenu}>Explore More</Link></li>
          <li><Link to={"/components"} onClick={toggleMenu}><p>Components</p></Link></li>
          <li><Link to={"/contact"} onClick={toggleMenu}>Contact Me</Link></li>
          
        </ul>
      </div>

      <button className="menu_toggle" onClick={toggleMenu}>
        {isVisible ? 'Close' : 'Menu'}
      </button>
    </div>
  );
}

export default Navbar;
