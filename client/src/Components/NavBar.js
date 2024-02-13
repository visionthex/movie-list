import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/addmovie">Add Movies</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;