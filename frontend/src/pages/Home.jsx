import React, { useState, useEffect } from "react";
import { MovieCard } from "../components/MovieCard.jsx";
import { searchMovies, getPopularMovies } from "../services/api.js";
import "../css/Home.css";

export function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load Movies");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handleSearch = async(e) => {
    e.preventDefault();
    if(!searchQuery.trim()) return;
    if(loading)return;
    setLoading(true);
    try {
        const searchResults = await searchMovies(searchQuery);
        setMovies(searchResults);
        setError(null);
    } catch (err) {
        
    }finally{
        setLoading(false);
    }

    
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies...."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        ></input>
        <button type="submit" className="button">
          Search
        </button>
      </form>
      {error && <div className="error-message">{error}</div>}
      {loading ? (
        <div className="loading"></div>
      ) : (
        <div className="movies-grid">
          <div className="movies-grid">
            {movies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        </div>
      )}
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
