import React from 'react'
import "../css/MovieCard.css";
import { useMovieContext } from '../contexts/MovieContext.jsx';
import { useNavigate } from 'react-router-dom';

export function MovieCard  ({movie}){
    const {isFavorite,addToFavorites,removeFromFavorites} = useMovieContext();
    const favorite=isFavorite(movie.id);
    const navigate = useNavigate();

    function onFavoriteClick(e){
        e.preventDefault();
        e.stopPropagation();
        if(favorite)removeFromFavorites(movie.id);
        else addToFavorites(movie)
    }
    function onCardClick() {
    navigate(`/movie/${movie.id}`);
  }
  return (
    <div className='movie-card' onClick={onCardClick}>
        <div className='movie-poster'>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <div className='movie-overlay'>
                <button className={`favorite-btn ${favorite?"active":""}`} onClick={onFavoriteClick}>
                    ♥
                </button>
            </div>
        </div>
        <div className='movie-info'>
            <h1>{movie.title}</h1>
            <p>{movie.release_date?.split("-")[0]}</p>
        </div>
    </div>
  )
}
