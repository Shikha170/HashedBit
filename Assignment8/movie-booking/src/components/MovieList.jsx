import React from 'react';
import { Link } from 'react-router-dom';
import movies from '/movies.json';
import './MovieList.css';

const MovieList = () => {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <div key={movie.id} className="movie-item">
          <img src={movie.image} alt={movie.title} />
          <h3>{movie.title}</h3>
          <Link to={`/movie/${movie.id}`}>Details</Link>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
