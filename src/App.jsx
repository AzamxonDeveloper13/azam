// src/App.jsx

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './pages/Products';
import Employes from './pages/Employes';
import UserList from './pages/UserList';
import Register from './pages/Register';
import Profile from './components/Profile';
import Home from './pages/Home';
import Cart from './components/Cart';

const App = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const handleRegister = (newUser) => {
    setUsers([...users, newUser]);
    setCurrentUser(newUser);
  };

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const handleRemoveFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <Router>
      <Navbar />
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/home" element={<Home onAddToCart={handleAddToCart} />} />
          <Route path="/products" element={<Products onAddToCart={handleAddToCart} />} />
          <Route path="/employes" element={<Employes />} />
          <Route path="/userlist" element={<UserList users={users} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} onRemove={handleRemoveFromCart} />} />
          <Route path="/register" element={<Register onRegister={handleRegister} />} />
          <Route path="/profile" element={<Profile user={currentUser} />} />
          <Route path="/payment" element={<div className="container mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-xl text-center"><h2 className="text-2xl font-bold mb-4">Payment Page</h2><p>Sample card number: 4242 4242 4242 4242</p></div>} />
          <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
