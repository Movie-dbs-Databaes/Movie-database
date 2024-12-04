import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState(''); // State for category selection

  // List of categories (genres)
  const genres = [
    'Action', 'Comedy', 'Drama', 'Horror', 'Romance', 'Sci-Fi', 'Fantasy', 'Thriller', 'Documentary', 'Family', 'Adventure'
  ];

  // Handle Enter key press
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onSearch(searchTerm, category); // Trigger search with search term and category
    }
  };

  // Handle input change
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle category change
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className="search-container">
      <h1>Search Movies</h1>
      <h3></h3>
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
          onClick={() => onSearch(searchTerm, category)}  // Trigger search when button is clicked
          className="search-button"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
