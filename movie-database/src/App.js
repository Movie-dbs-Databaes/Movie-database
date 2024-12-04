import './App.css';
import SearchBar from './components/SearchBar';
import MovieDetails from './components/MovieDetails';
import MovieList from './components/MovieList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<SearchBar />} />
        <Route path="/MovieList" element={<MovieList />} />
      </Routes>
      </Router>
       
    </div>
  );
}

export default App;
