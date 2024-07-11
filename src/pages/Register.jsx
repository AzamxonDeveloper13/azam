import React, { useState } from 'react';

const Register = ({ onRegister }) => {
  const [newUser, setNewUser] = useState({ name: '', email: '', phone: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(newUser);
    setNewUser({ name: '', email: '', phone: '' });
  };

  return (
    <div className="container mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-extrabold mb-10 text-center text-blue-700">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={newUser.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={newUser.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-gray-700">Phone</label>
          <input
            id="phone"
            name="phone"
            type="text"
            value={newUser.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="flex justify-center mt-4">
          <button type="submit" className="btn btn-primary text-white">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
