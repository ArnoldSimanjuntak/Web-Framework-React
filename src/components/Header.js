// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Rentify</Link>
      </div>
      
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Beranda</Link>
          </li>
          <li>
            <Link to="/">Layanan</Link>
          </li>
          <li>
            <Link to="/rooms">Daftar Ruangan</Link>
          </li>
        </ul>
      </nav>
      
      <div className="profile-icon">
        <Link to="/profile">
          <div className="profile-circle"></div>
        </Link>
      </div>
    </header>
  );
};

export default Header;