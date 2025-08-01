import React from 'react';
import MovieCard from '../movieCard/movieCard';
import './MovieList.css';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.title} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;