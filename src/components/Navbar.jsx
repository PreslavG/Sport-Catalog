import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <button className="menuButton">☰</button>
      <img src="https://logowik.com/content/uploads/images/sports8897.jpg" alt="Logo" />
      <ul className="navbarList">
        <li><Link to="/">About</Link></li>
        <li><Link to="/Catalog">Catalog</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
