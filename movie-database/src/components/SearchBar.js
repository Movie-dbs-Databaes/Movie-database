import React, { useState } from 'react';
import './SearchBar.css'; // Assuming you have separate styles for the SearchBar

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Handle search on Enter key
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onSearch(searchTerm); // Trigger search with only searchTerm
    }
  };

  // Handle search button click
  const handleSearchClick = () => {
    onSearch(searchTerm); // Trigger search with only searchTerm
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

        {/* Search Button */}
        <button onClick={handleSearchClick} className="search-button">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
