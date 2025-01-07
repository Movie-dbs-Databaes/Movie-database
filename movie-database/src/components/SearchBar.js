import React, { useState } from 'react';
import './SearchBar.css'; // Assuming you have separate styles for the SearchBar

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');

  // List of genres for the category dropdown
  const genres = [
    'Action', 'Comedy', 'Drama', 'Horror', 'Romance',
    'Sci-Fi', 'Fantasy', 'Thriller', 'Documentary', 'Family', 'Adventure',
  ];

  // Handle search on Enter key
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onSearch(searchTerm, category); // Trigger search with current inputs
    }
  };

  // Handle search button click
  const handleSearchClick = () => {
    onSearch(searchTerm, category); // Trigger search with current inputs
  };

  return (
    <div className="search-container">
      <h1>Search Movies</h1>
      <div className="search-bar">
        {/* Search Input */}
        <input
          type="search"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          className="search-input"
        />

        {/* Category Dropdown */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="category-dropdown"
        >
          <option value="" disabled>Select Category</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>

        {/* Search Button */}
        <button onClick={handleSearchClick} className="search-button">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
