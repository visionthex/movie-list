function App() {
  const movies = [
    {title: 'The Godfather', director: 'Francis Ford Coppola', hasOscars: true},
    {title: 'Star Wars', director: 'Rian Johnson', hasOscars: true},
    {title: 'The Shawshank Redemption', director: 'Frank Darabont', hasOscars: false},
    {title: 'Forrest Gump', director: 'Robert Zemeckis', hasOscars: true},
    {title: 'Inception', director: 'Christopher Nolan', hasOscars: true},
  ]


  return (
    <div className="App">
      <h1>Movie-List</h1>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            <h2>{movie.title}</h2>
            <p>Director: {movie.director}</p>
            <p>{movie.hasOscars ? 'Has Oscars' : 'Has no Oscars'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
