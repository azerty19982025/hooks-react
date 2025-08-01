import React, { useState } from 'react';
import './addMovie.css';

const AddMovieForm = ({ addMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      newMovie.title &&
      newMovie.description &&
      newMovie.posterURL &&
      newMovie.rating
    ) {
      addMovie({
        ...newMovie,
        rating: Number(newMovie.rating),
      });
      setNewMovie({
        title: '',
        description: '',
        posterURL: '',
        rating: '',
      });
    }
  };

  return (
    <div className="add-movie-form">
      <h2>Add New Movie</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={newMovie.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={newMovie.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Poster URL:</label>
          <input
            type="url"
            name="posterURL"
            value={newMovie.posterURL}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Rating (1-10):</label>
          <input
            type="number"
            name="rating"
            min="1"
            max="10"
            value={newMovie.rating}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default AddMovieForm;