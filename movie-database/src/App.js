import './App.css';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import { useState } from 'react';

function App() {
  const [movies, setMovies] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode
  const [sortBy, setSortBy] = useState('alphabetically'); // State for sort option
  const [category, setCategory] = useState(''); // State for category

  // Handle movie search with category and search term
  const handleSearch = async (searchTerm) => {
    if (!searchTerm && !category) return;

    let url = `https://www.omdbapi.com/?apikey=your_api_key&s=${searchTerm}`;
    if (category) {
      url += `&genre=${category}`;
    }

    const response = await fetch(url);
    const data = await response.json();

    if (data.Response === "True") {
      const sortedMovies = sortMovies(data.Search); // Sort movies before setting state
      setMovies(sortedMovies);
    } else {
      alert("No movies found.");
    }
  };

  // Function to sort movies based on the selected option
  const sortMovies = (movies) => {
    switch (sortBy) {
      case 'alphabetically':
        return movies.sort((a, b) => a.Title.localeCompare(b.Title));
      case 'rating':
        return movies.sort((a, b) => parseFloat(b.imdbRating) - parseFloat(a.imdbRating));
      case 'length':
        return movies.sort((a, b) => parseInt(b.Runtime) - parseInt(a.Runtime));
      case 'releaseDate':
        return movies.sort((a, b) => new Date(b.Year) - new Date(a.Year));
      default:
        return movies;
    }
  };

  // Toggle dark mode theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Handle sort option change
  const handleSortChange = (event) => {
    setSortBy(event.target.value);
    const sortedMovies = sortMovies(movies);
    setMovies(sortedMovies);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="video-background">
        <video
          className="background-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/3190131-uhd_3840_2160_24fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="search-container">
        <SearchBar onSearch={handleSearch} />
        <div className="dropdown-container">
          <select
            className="category-dropdown"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            {/* Add more categories as needed */}
          </select>
          <select className="sort-dropdown" value={sortBy} onChange={handleSortChange}>
            <option value="alphabetically">Sort Alphabetically</option>
            <option value="rating">Sort by Rating</option>
            <option value="length">Sort by Length</option>
            <option value="releaseDate">Sort by Release Date</option>
          </select>
        </div>
      </div>
      <MovieList movies={movies} />
      <button className="theme-toggle" onClick={toggleTheme}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  );
}

export default App;
