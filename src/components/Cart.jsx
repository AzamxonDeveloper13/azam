// src/components/Cart.jsx

import React from 'react';

const Cart = ({ cartItems, onRemove }) => {
  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="container mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-xl text-center">
        <h2 className="text-3xl font-extrabold mb-10 text-center text-blue-600">Your Cart is Empty</h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-xl">
      <h2 className="text-3xl font-extrabold mb-10 text-center text-blue-600">Your Cart</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        {cartItems.map(item => (
          <div key={item.id} className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-xl font-bold">{item.name}</h3>
              <p>${item.price.toFixed(2)}</p>
            </div>
            <button 
              className="bg-red-500 text-white px-4 py-2 rounded-lg" 
              onClick={() => onRemove(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
