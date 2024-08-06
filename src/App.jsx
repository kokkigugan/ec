import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './compoenets/Home';
import Login from './compoenets/Login';
import Signup from './compoenets/Signup';
import Header from './compoenets/Header';


const App = () => {
  const [authMode, setAuthMode] = useState('signup');
  const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));

  return (
    <Router>
      <div>
        <Header /> 
        <Routes>
          <Route path="/" element={<Navigate to={isLoggedIn ? '/home' : '/login'} />} />
          <Route
            path="/signup"
            element={<Signup setAuthMode={setAuthMode} />}
          />
          <Route
            path="/login"
            element={<Login setAuthMode={setAuthMode} />}
          />
          <Route
            path="/home"
            element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
          />
          {/* Add other routes for Products, Orders, Category */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
