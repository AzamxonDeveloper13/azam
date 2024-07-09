import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './pages/Products';
import Employes from './pages/Employes';
import Userlist from './pages/Userlist';
import Register from './pages/Register';
import Profile from './components/Profile';
import Home from './pages/Home';
import Cart from './components/Cart';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/employes" element={<Employes />} />
          <Route path="/userlist" element={<Userlist />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/payment" element={<div className="container mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-xl text-center"><h2 className="text-2xl font-bold mb-4">Payment Page</h2><p>Sample card number: 4242 4242 4242 4242</p></div>} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
