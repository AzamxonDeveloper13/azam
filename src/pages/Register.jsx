import React from 'react';

const Register = () => {
  return (
    <div className="container mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-xl">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-blue-600">Register</h2>
      <form className="max-w-md mx-auto">
        <label className="block mb-4">
          <span className="text-gray-700">Email</span>
          <input type="email" className="form-input mt-1 block w-full" placeholder="you@example.com" />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Password</span>
          <input type="password" className="form-input mt-1 block w-full" placeholder="********" />
        </label>
        <button className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
