import React, { useState } from 'react';

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);

  const fetchMovies = (query = '') => {
    fetch(`http://localhost:3000/movies${query ? `?q=${encodeURIComponent(query)}` : ''}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Received movies:', data);
        setMovies(data);
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
    <div className="App">
      <h1>Movie-List</h1>
      <form onSubmit={handleSearch}>
        <input type="search" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search movies..." />
        <input type="submit" value="Movie" />
      </form>
      {error && <p>{error}</p>}
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title} ({movie.year})</h2>
            <p>Director: {movie.director}</p>
            <p>{movie.oscar ? 'Has Oscars' : 'Has no Oscars'}</p>
            <p>Review: {movie.review}</p>
            <p>Rating: {movie.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;