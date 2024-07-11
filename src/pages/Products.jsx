import React from 'react';

const Products = ({ onAddToCart }) => {
  const products = [
    { id: 1, name: 'Product 1', description: 'This is a great product.', price: 29.99, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', description: 'This product is amazing.', price: 39.99, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', description: 'You will love this product.', price: 49.99, image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Product 4', description: 'The best product ever.', price: 59.99, image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Product 5', description: 'A must-have product.', price: 69.99, image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="container mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-xl">
      <h2 className="text-3xl font-extrabold mb-10 text-center text-blue-600">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="card bg-white shadow-md rounded-lg overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-700 mb-2">{product.description}</p>
              <p className="text-gray-900 font-bold mb-4">${product.price.toFixed(2)}</p>
              <button
                onClick={() => onAddToCart(product)}
                className="btn btn-primary w-full"
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
