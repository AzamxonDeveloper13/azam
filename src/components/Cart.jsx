import React, { useState } from 'react';

const Cart = () => {
  // Состояние для хранения продуктов в корзине
  const [cartItems, setCartItems] = useState([]);

  // Примерный метод для добавления продукта в корзину
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // Примерный метод для удаления продукта из корзины
  const removeFromCart = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  // Примерные данные продуктов для корзины
  const products = [
    { id: 1, name: 'Product 1', price: 19.99 },
    { id: 2, name: 'Product 2', price: 29.99 },
    { id: 3, name: 'Product 3', price: 39.99 },
  ];

  return (
    <div className="container mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-xl">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-blue-600">Shopping Cart</h2>
      <div className="space-y-4">
        {cartItems.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
          <ul className="space-y-4">
            {cartItems.map((item, index) => (
              <li key={index} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <p className="text-gray-700">${item.price.toFixed(2)}</p>
                </div>
                <button
                  onClick={() => removeFromCart(index)}
                  className="bg-red-600 text-white p-2 rounded-md hover:bg-red-700 transition-colors"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <div className="text-center mt-6">
          <button
            onClick={() => alert('Proceed to checkout')}
            className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
