import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-black text-white p-4">
      <h1 className="text-2xl font-bold">CarKhabri</h1>
      <nav className="mt-2">
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/crash-test-ratings">Crash Test Ratings</Link>
      </nav>
    </header>
  );
};

export default Header;