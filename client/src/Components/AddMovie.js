import React, { useState } from 'react';
import '../Styles/addmovie.css';

const AddMovie = () => {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [director, setDirector] = useState('');
  const [oscar, setOscar] = useState(false);
  const [review, setReview] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newMovie = {
      title,
      year: year ? parseInt(year) : null,
      director,
      oscar,
      review,
      rating: rating ? parseFloat(rating) : null
    };
    try {
      const response = await fetch('http://localhost:3001/movies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newMovie)
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Response:', data);
    } catch (error) {
      console.error('Error adding movie:', error);
    }
  };

  return (
    <div className="AddMovie">
      <h1>Add Movie</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
          </li>
          <li>
          <input type="number" value={year} onChange={e => setYear(e.target.value)} placeholder="Year" required />
          </li>
          <li>
            <input type="text" value={director} onChange={e => setDirector(e.target.value)} placeholder="Director" required />
          </li>
          <li>
            <label>
              <input type="checkbox" checked={oscar} onChange={e => setOscar(e.target.checked)} />
              Has Oscars
            </label>
          </li>
          <li>
            <textarea value={review} onChange={e => setReview(e.target.value)} placeholder="Review" required />
          </li>
          <li>
            <input type="number" value={rating} onChange={e => setRating(e.target.value)} placeholder="Rating" required />
          </li>
          <li>
            <input type="submit" value="Add Movie" />
          </li>
        </ul>
      </form>
    </div>
  );
};

export default AddMovie;