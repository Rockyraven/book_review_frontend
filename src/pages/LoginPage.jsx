import React, { useEffect, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../redux/Slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  // const token  = useSelector((state) => state.auth);
  const {user, token}  = useSelector((state) => state.auth);
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (user) {
      navigate('/'); // Navigate to home page if login is successful
    }
  }, [user, navigate]);

  console.log("user", user, token)

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
          <p className='mt-2'>New user click at <Link to="/register"> Here</Link></p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
