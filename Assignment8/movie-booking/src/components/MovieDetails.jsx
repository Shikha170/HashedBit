import React from 'react';
import { useParams, Link } from 'react-router-dom';
import MovieList from './MovieList';
import movies from '/movies.json';

const MovieDetails = () => {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));

  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={movie.image} alt={movie.title} />
      <p>Some details about the movie...</p>
      <Link to={`/book/${movie.id}`}>Book Seat</Link>
    </div>
  );
}

export default MovieDetails;
