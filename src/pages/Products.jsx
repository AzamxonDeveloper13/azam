import React, { useState } from 'react';

const Products = () => {
  const [cart, setCart] = useState([]);
  const products = [
    { id: 1, name: 'Apple iPhone 13', price: '$799', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Samsung Galaxy S21', price: '$699', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Sony PlayStation 5', price: '$499', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Nintendo Switch', price: '$299', image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Microsoft Xbox Series X', price: '$499', image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Apple MacBook Air', price: '$999', image: 'https://via.placeholder.com/150' },
    { id: 7, name: 'Samsung Galaxy Tab S7', price: '$649', image: 'https://via.placeholder.com/150' },
    { id: 8, name: 'Sony WH-1000XM4', price: '$349', image: 'https://via.placeholder.com/150' },
    { id: 9, name: 'Apple Watch Series 7', price: '$399', image: 'https://via.placeholder.com/150' },
    { id: 10, name: 'Amazon Echo Dot', price: '$49', image: 'https://via.placeholder.com/150' },
    // Добавьте больше товаров по необходимости
  ];

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <div className="container mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-xl">
      <h2 className="text-3xl font-extrabold mb-10 text-center text-blue-600">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="card bg-white shadow-md rounded-lg overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-lg text-gray-700 mb-4">{product.price}</p>
              <button
                className="btn btn-primary w-full"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
