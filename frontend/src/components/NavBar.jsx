import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiHome, FiHeart } from "react-icons/fi";
import { useMovieStore } from "../store/useMovieStore.js"; // Import store
import "../css/Navbar.css";

export const NavBar = () => {
  const location = useLocation();
  const loadPopularMovies = useMovieStore((state) => state.loadPopularMovies);
  const setSearchQuery = useMovieStore((state) => state.setSearchQuery);

  const handleHomeClick = () => {
    setSearchQuery(""); // Clear search bar
    loadPopularMovies(); // Reset to popular
  };

  return (
    <nav className="navbar">
      <Link to="/" className="brand-link" onClick={handleHomeClick}>
        <span className="brand-title">CineScope</span>
        <span className="slogan">Search and track your favorite movies</span>
      </Link>

      <div className="navbar-links">
        <Link
          to="/"
          onClick={handleHomeClick}
          className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
        >
          <FiHome className="nav-icon" />
          Home
        </Link>
        <Link
          to="/favorites"
          className={`nav-link ${location.pathname === "/favorites" ? "active" : ""}`}
        >
          <FiHeart className="nav-icon" />
          Favorites
        </Link>
      </div>
    </nav>
  );
};
