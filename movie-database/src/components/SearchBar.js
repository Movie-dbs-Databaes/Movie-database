import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');

  const genres = [
    'Action', 'Comedy', 'Drama', 'Horror', 'Romance', 'Sci-Fi', 'Fantasy', 'Thriller', 'Documentary', 'Family', 'Adventure'
  ];

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onSearch(searchTerm, category);
    }
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className="search-container">
      <h1>Search for Movies</h1>
      <div className="search-bar">
        <input
          type="search"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <select
          value={category}
          onChange={handleCategoryChange}
          className="category-dropdown"
        >
          <option value="">Select Category</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>{genre}</option>
          ))}
        </select>
        <button
          onClick={() => onSearch(searchTerm, category)}
          className="search-button"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;