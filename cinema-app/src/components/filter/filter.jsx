import React from 'react';
import './Filter.css';

const Filter = ({ onTitleChange, onRatingChange }) => {
  return (
    <div className="filter-container">
      <input
        type="text"
        placeholder="Filter by title..."
        onChange={(e) => onTitleChange(e.target.value)}
        className="filter-input"
      />
      <select
        onChange={(e) => onRatingChange(e.target.value)}
        className="filter-select"
      >
        <option value="">Filter by rating...</option>
        <option value="9">9+</option>
        <option value="8">8+</option>
        <option value="7">7+</option>
        <option value="6">6+</option>
        <option value="5">5+</option>
      </select>
    </div>
  );
};

export default Filter;