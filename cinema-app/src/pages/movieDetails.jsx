

import { useParams, Link } from 'react-router-dom';
import './MovieDetail.css';

const MovieDetail = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));

  if (!movie) return <div>Film non trouvé</div>;

  return (
    <div className="movie-detail">
      <Link to="/" className="back-button">← Retour à l'accueil</Link>
      
      <h1>{movie.title}</h1>
      <div className="detail-content">
        <img src={movie.posterURL} alt={movie.title} className="detail-poster"/>
        
        <div className="detail-info">
          <p className="rating">Note: ⭐ {movie.rating}/10</p>
          <p className="description">{movie.description}</p>
          
          <div className="trailer-container">
            <h2>Bande-annonce</h2>
            <iframe 
              src={movie.trailerURL} 
              title={`Bande-annonce ${movie.title}`} 
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default movieDetail;