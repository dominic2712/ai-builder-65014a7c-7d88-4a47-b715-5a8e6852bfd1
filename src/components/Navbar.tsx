import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <h1 className="text-xl font-bold">AI Website</h1>
        <div>
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;