import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../assets/login.jpeg'; // Update the path as necessary

const Signup = ({ setAuthMode }) => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    if (step === 1 && email) {
      setStep(2);
    } else if (step === 2 && password && confirmPassword) {
      if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      const user = { email, password };
      localStorage.setItem('user', JSON.stringify(user));
      alert('Signup successful! Please log in.');
      setAuthMode('login');
      navigate('/login');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-purple-600">Sign Up</h2>
        <img src={image} alt="Signup" className="mb-4 w-full rounded-lg" />
        <form>
          {step === 1 && (
            <div className="mb-4">
              <label className="block mb-1 text-gray-700" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
          )}
          {step === 2 && (
            <>
              <div className="mb-4">
                <label className="block mb-1 text-gray-700" htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block mb-1 text-gray-700" htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
            </>
          )}
          <button
            type="button"
            onClick={handleNext}
            className="w-full p-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-300"
          >
            {step === 1 ? 'Next' : 'Sign Up'}
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account?{' '}
          <button
            onClick={() => {
              setAuthMode('login');
              navigate('/login');
            }}
            className="text-purple-500 hover:underline"
          >
            Log in
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;
