import './App.css';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import { useState } from 'react';

function App() {
  const [movies, setMovies] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode

  // Handle movie search with category and search term
  const handleSearch = async (searchTerm, category) => {
    if (!searchTerm && !category) return;

    let url = `https://www.omdbapi.com/?apikey=your_api_key&s=${searchTerm}`;
    if (category) {
      url += `&genre=${category}`;
    }

    const response = await fetch(url);
    const data = await response.json();
    
    if (data.Response === "True") {
      setMovies(data.Search);
    } else {
      alert("No movies found.");
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
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
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} />
      <button className="theme-toggle" onClick={toggleTheme}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  );
}

export default App;
