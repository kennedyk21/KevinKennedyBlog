import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="header-title">
          Kevin Kennedy's Blog
        </Link>
      </div>
    </header>
  );
};

export default Header;