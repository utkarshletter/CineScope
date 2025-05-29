import React, { useState } from "react";
import { MovieCard } from "../components/MovieCard.jsx";

export function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "John Wick", release_date: "2006" },
    { id: 2, title: "Avengers", release_date: "2012" },
    { id: 3, title: "Batman", release_date: "2010" },
    { id: 4, title: "Bahubali", release_date: "2019" },
    { id: 5, title: "KGF", release_date: "2024" },
    { id: 6, title: "Sultan", release_date: "2020" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("");
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
      <div className="movie-grid">
        {movies.map(
          (movie) =>
           (
              <MovieCard movie={movie} key={movie.id} />
            )
        )}
      </div>
    </div>
  );
}
