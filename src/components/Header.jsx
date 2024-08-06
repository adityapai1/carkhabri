import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-black text-white p-4">
      <h1 className="text-5xl font-bold mx-auto text-center">🚘 CarKhabree</h1>
      <nav className="mt-2">
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/crash-test-ratings">Safety Info</Link>
      </nav>
    </header>
  );
};

export default Header;