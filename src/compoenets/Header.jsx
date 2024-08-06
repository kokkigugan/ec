import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
  const user = JSON.parse(localStorage.getItem('user'));
  const [showLogout, setShowLogout] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  const toggleLogout = () => {
    setShowLogout(!showLogout);
  };

  return (
    <header className="fixed top-0 left-0 w-full p-4 flex justify-between items-center bg-gradient-to-r from-purple-600 to-pink-600 bg-opacity-90 shadow-lg z-10">
      <div className="flex items-center space-x-4">
        <div className="text-2xl font-bold text-white">
          <Link to="/">SEE NOW</Link>
        </div>
      </div>
      <nav className="absolute left-1/2 transform -translate-x-1/2 flex space-x-6">
        <Link to="/home" className="text-white hover:text-yellow-300 transition-colors duration-300">Home</Link>
        <Link to="/products" className="text-white hover:text-yellow-300 transition-colors duration-300">Products</Link>
        <Link to="/orders" className="text-white hover:text-yellow-300 transition-colors duration-300">Orders</Link>
        <Link to="/category" className="text-white hover:text-yellow-300 transition-colors duration-300">Category</Link>
        <Link to="/contact" className="text-white hover:text-yellow-300 transition-colors duration-300">Contact</Link>
      </nav>
      <div className="flex items-center space-x-4">
        {isLoggedIn ? (
          <div className="relative inline-block">
            <button 
              className="text-white hover:text-yellow-300 transition-colors duration-300 focus:outline-none"
              onClick={toggleLogout}
            >
              {user.email}
            </button>
            {showLogout && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg py-1">
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-500 hover:text-white transition-colors duration-300"
                >
                  Log out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link to="/login" className="text-white hover:text-yellow-300 transition-colors duration-300">Login</Link>
            <Link to="/signup" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">Sign up</Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
