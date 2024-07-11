import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, onRemove }) => {
  const handleRemove = (id) => {
    onRemove(id);
  };

  return (
    <div className="container mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-extrabold mb-10 text-center text-blue-700">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-sm">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-700">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="btn btn-error text-white"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-center">
            <Link
              to="/payment"
              className="btn btn-primary w-full"
            >
              Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
