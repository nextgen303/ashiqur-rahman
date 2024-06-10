import React, { useState } from 'react';
import AdminPanel from './AdminPanel';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password') {
      // Authentication successful
      setAuthenticated(true);
    } else {
      // Authentication failed
      console.log('Invalid credentials');
      // You can display an error message or handle it as needed
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      {!authenticated ? (
        <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              className="border rounded w-full py-2 px-3"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="border rounded w-full py-2 px-3"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Login</button>
        </form>
      ) : (
        <AdminPanel />
      )}
    </div>
  );
};

export default Login;
