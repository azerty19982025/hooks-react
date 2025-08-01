import { useState } from 'react';
import MovieList from '../../components/movieList/movieList';
import Filter from '../../components/filter/filter';
import AddMovieForm from '../../components/addMovie/addMovie';
import './Home.css';

const Home = ({ movies, addMovie }) => {
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const filteredMovies = movies.filter(movie => {
    return (
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      (ratingFilter === '' || movie.rating >= Number(ratingFilter))
    );
  });

  return (
    <div className="home-page">
      <h1>Ma Collection de Films</h1>
      
      <div className="content-container">
        <div className="main-content">
          <Filter 
            onTitleChange={setTitleFilter} 
            onRatingChange={setRatingFilter} 
          />
          <MovieList movies={filteredMovies} />
        </div>
        
        <div className="sidebar">
          <AddMovieForm addMovie={addMovie} />
        </div>
      </div>
    </div>
  );
};

export default home;