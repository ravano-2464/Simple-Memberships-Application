import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex space-x-4">
        <li><Link to="/" className="text-white">Home</Link></li>
        <li><Link to="/articles" className="text-white">Articles</Link></li>
        <li><Link to="/videos" className="text-white">Videos</Link></li>
        <li><Link to="/membership" className="text-white">Membership</Link></li>
        <li><Link to="/login" className="text-white">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;