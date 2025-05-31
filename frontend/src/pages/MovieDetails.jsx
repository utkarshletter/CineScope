import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../services/api";
import { useMovieContext } from "../contexts/MovieContext.jsx";
import "../css/MovieDetails.css";

export function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
    async function fetchMovie() {
      setLoading(true);
      const data = await getMovieDetails(id);
      setMovie(data);
      setLoading(false);
    }
    fetchMovie();
  }, [id]);

  const onFavoriteClick = (e) => {
    e.stopPropagation();
    if (!movie) return;
    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  };

  if (loading) return <div className="movie-details loading">Loading...</div>;
  if (!movie) return <div className="movie-details error">Movie not found.</div>;

  return (
    <div className="movie-details">
      <div className="movie-container">
        <div className="movie-poster">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={onFavoriteClick}
            title={favorite ? "Remove from favorites" : "Add to favorites"}
          >
            ♥
          </button>
        </div>
        <div className="movie-info">
          <h1 className="title">{movie.title}</h1>
          <p className="release-date">🎬 {movie.release_date}</p>
          <p className="tagline">{movie.tagline}</p>
          <p className="overview">{movie.overview}</p>
          <div className="extra-info">
            <span>⭐ {movie.vote_average}</span>
            <span>⏱️ {movie.runtime} mins</span>
            <span>💰 ${movie.budget.toLocaleString()}</span>
          </div>
          <div className="genres">
            {movie.genres.map((genre) => (
              <span key={genre.id} className="genre">
                {genre.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
