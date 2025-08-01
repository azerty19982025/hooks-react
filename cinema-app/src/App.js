import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/home/home';
import MovieDetail from './pages/movieDetails/movieDetails';
import addMovie from './components/addMovie';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Inception',
      description: 'Un voleur qui subtilise les secrets grâce à une technologie de partage de rêves...',
      posterURL: 'https://m.media-amazon.com/images/I/91Rc8cAmnAL._AC_UF1000,1000_QL80_.jpg',
      rating: 8.8,
      trailerURL: 'https://www.youtube.com/embed/YoHD9XEInc0'
    },
    // ... autres films avec id et trailerURL
  ]);

  const addMovie = (newMovie) => {
    const id = Math.max(...movies.map(m => m.id)) + 1;
    setMovies([...movies, { ...newMovie, id }]);
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home movies={movies} addMovie={addMovie} />} />
          <Route path="/movie/:id" element={<MovieDetail movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;