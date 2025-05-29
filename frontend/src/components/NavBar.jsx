import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

export const NavBar = () => {
  return (
    <nav className="navbar"> 
      <div className="navbar-brand">
        <Link to="/"><span className="brand-title">CineScope</span> <span className="slogan">Search and track your favorite movies</span></Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/favorites" className="nav-link">
          Favorites
        </Link>
      </div>
    </nav>
  );
};
