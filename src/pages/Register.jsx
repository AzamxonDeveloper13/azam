// src/pages/Register.jsx

import React, { useState } from 'react';

const Register = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({ name, email, phone, password });
    setSuccess(true);
    setName('');
    setEmail('');
    setPhone('');
    setPassword('');
    setTimeout(() => setSuccess(false), 3000); // Hide success message after 3 seconds
  };

  return (
    <div className="container mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-xl">
      <h2 className="text-3xl font-extrabold mb-10 text-center text-blue-600">Register</h2>
      {success && (
        <div className="bg-green-500 text-white p-4 rounded-lg mb-4 text-center">
          Account successfully added!
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className="w-full px-3 py-2 border rounded-lg" 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="w-full px-3 py-2 border rounded-lg" 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Phone</label>
          <input 
            type="text" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            className="w-full px-3 py-2 border rounded-lg" 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className="w-full px-3 py-2 border rounded-lg" 
            required 
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg">Register</button>
      </form>
    </div>
  );
};

export default Register;
