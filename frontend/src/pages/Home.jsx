import React, { useEffect } from "react";
import { useMovieStore } from "../store/useMovieStore.js";
import { MovieCard } from "../components/MovieCard.jsx";
import "../css/Home.css";

export function Home() {
  const {
    searchQuery,
    setSearchQuery,
    movies,
    loading,
    error,
    loadPopularMovies,
    searchForMovies,
  } = useMovieStore();

  useEffect(() => {
    loadPopularMovies();
  }, [loadPopularMovies]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    await searchForMovies();
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}
