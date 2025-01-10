import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

function Movie() {
  const [movieList, setMovieList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [showSplash, setShowSplash] = useState(true); // Splash text state

  const getMovies = (query = '', genre = '') => {
    const apiKey = 'e9398896e43eb1802e8c35d2e38e536c';
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;

    if (query) {
      url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;
    }

    if (genre) {
      url += `&with_genres=${genre}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((json) => setMovieList(json.results))
      .catch((err) => console.error('Error fetching movies:', err));
  };

  useEffect(() => {
    // Load movies when splash is hidden
    if (!showSplash) {
      getMovies();
    }
  }, [showSplash]);

  const handleSearch = (query, genre) => {
    setSearchTerm(query);
    setCategory(genre);
    getMovies(query, genre);
  };

  useEffect(() => {
    // Show splash for 3 seconds, then hide
    const splashTimeout = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(splashTimeout); // Cleanup timeout
  }, []);

  return (
    <div>
      {showSplash ? (
        <div className="splash-overlay">
          <h1 className="splash-title">DataBaes</h1>
        </div>
      ) : (
        <>
          <SearchBar onSearch={handleSearch} />
          <MovieList movies={movieList} />
        </>
      )}
    </div>
  );
}

export default Movie;
