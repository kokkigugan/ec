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
    <header className="bg-transparent shadow-md p-4 flex justify-between items-center">
      <div className="text-xl font-bold text-purple-600">
        <Link to="/home">SEE NOW</Link>
      </div>
      <nav className="space-x-4">
        <Link to="/home" className="text-gray-700 hover:text-purple-500">Home</Link>
        <Link to="/products" className="text-gray-700 hover:text-purple-500">Products</Link>
        <Link to="/orders" className="text-gray-700 hover:text-purple-500">Orders</Link>
        <Link to="/category" className="text-gray-700 hover:text-purple-500">Category</Link>
        {isLoggedIn ? (
          <div className="relative inline-block">
            <button 
              className="text-gray-700 hover:text-purple-500 focus:outline-none"
              onClick={toggleLogout}
            >
              {user.email}
            </button>
            {showLogout && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg py-1">
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-500 hover:text-white"
                >
                  Log out
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login" className="text-gray-700 hover:text-purple-500">Login</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
