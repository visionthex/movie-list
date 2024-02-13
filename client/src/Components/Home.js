import React from 'react';

const Home = ({ movies, handleSearch, search, setSearch, error }) => {
  return (
    <div className="App">
      <h1>Movie-List</h1>
      <form onSubmit={handleSearch}>
        <input type="search" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search Movies..." />
        <input type="submit" value="Search" />
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
};

export default Home;