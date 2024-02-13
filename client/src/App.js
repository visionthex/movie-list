import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Styles/app.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import AddMovie from './Components/AddMovie';

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);

  const fetchMovies = (query = '') => {
    fetch(`http://localhost:3001/movies${query ? `?q=${encodeURIComponent(query)}` : ''}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        console.log('Received movies:', json);
        setMovies(json);
        setError(null);
      })
      .catch(error => {
        console.error('Error:', error);
        setError('Error fetching movies. Please try again.');
      });
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log('Search Query:', search);
    if (search.trim() === '') {
      setMovies([]);
    } else {
      fetchMovies(search);
    }
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home movies={movies} handleSearch={handleSearch} search={search} setSearch={setSearch} error={error} />} />
        <Route path="/addmovie" element={<AddMovie />} />
      </Routes>
    </Router>
  );
}

export default App;