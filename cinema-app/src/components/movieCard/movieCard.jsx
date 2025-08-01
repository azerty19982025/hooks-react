import { Link } from 'react-router-dom';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className="movie-card-link">
      <div className="movie-card">
        <img src={movie.posterURL} alt={movie.title} className="movie-poster"/>
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <span className="movie-rating">⭐ {movie.rating}</span>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;