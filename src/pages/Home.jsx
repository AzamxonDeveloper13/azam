import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">Welcome to MyBrand</h1>
        <p className="text-lg text-gray-600 mb-4">
          This is the home page of your amazing application. Explore our features and enjoy the experience.
        </p>
        <img
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          alt="Sample"
          className="max-w-xs mx-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Home;
