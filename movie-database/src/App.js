import './App.css';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import { useState } from 'react';

function App() {
  const [movies, setMovies] = useState([]);

  // Handle movie search with category and search term
  const handleSearch = async (searchTerm, category) => {
    if (!searchTerm && !category) return;

    // Prepare API URL based on the search term and category
    let url = `https://www.omdbapi.com/?apikey=your_api_key&s=${searchTerm}`;
    if (category) {
      url += `&genre=${category}`;  // Add genre filter if a category is selected
    }

    const response = await fetch(url);
    const data = await response.json();
    
    if (data.Response === "True") {
      setMovies(data.Search); // Set movie data in the state
    } else {
      alert("No movies found.");
    }
  };

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
