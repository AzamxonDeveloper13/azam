import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto mt-24 p-4">
        <div className="flex flex-col items-center justify-center">
          <img
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            alt="Sample"
            className="max-w-xs rounded-lg shadow-lg"
          />
          <h1 className="mt-6 text-4xl font-bold text-gray-800">Welcome to MyBrand</h1>
          <p className="mt-4 text-gray-600">This is a sample application using Tailwind CSS.</p>
        </div>
      </div>
    </div>
  );
}

export default App