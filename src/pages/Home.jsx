import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 mt-10">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-200 to-blue-500 rounded-xl shadow-2xl overflow-hidden mb-16">
        <div className="relative z-10 flex flex-col md:flex-row items-center md:space-x-12 lg:space-x-20 p-8 md:p-16 text-center md:text-left">
          <div className="flex-1">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-blue-900 leading-tight">
              Welcome to <span className="text-blue-600">Our Store</span>!
            </h1>
            <p className="text-lg md:text-xl mb-6 text-gray-800">
              Explore our exclusive range of products and find exactly what you need.
            </p>
            <Link
              to="/products"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all transform hover:scale-105"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-blue-900">
          Popular Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Пример популярных продуктов */}
          {[
            { name: 'Product 1', price: '$19.99', img: 'https://via.placeholder.com/400x300' },
            { name: 'Product 2', price: '$29.99', img: 'https://via.placeholder.com/400x300' },
            { name: 'Product 3', price: '$39.99', img: 'https://via.placeholder.com/400x300' },
            { name: 'Product 4', price: '$49.99', img: 'https://via.placeholder.com/400x300' },
            { name: 'Product 5', price: '$59.99', img: 'https://via.placeholder.com/400x300' },
            { name: 'Product 6', price: '$69.99', img: 'https://via.placeholder.com/400x300' },
          ].map((product, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105 duration-300 overflow-hidden relative"
            >
              <img src={product.img} alt={product.name} className="w-full h-40 object-cover mb-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-110" />
              <h3 className="text-xl font-bold mb-2 text-gray-900">{product.name}</h3>
              <p className="text-gray-600 mb-4 text-lg">{product.price}</p>
              <Link
                to="/products"
                className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-xl transition-colors transform hover:scale-105"
              >
                View Product
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-blue-50 py-12 rounded-xl shadow-lg mb-16">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl font-extrabold mb-8 text-center text-blue-900">What We Offer</h2>
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="flex-1 mb-8 md:mb-0 bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105 relative">
              <svg className="w-12 h-12 text-blue-600 mb-4 absolute top-4 right-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v2m0 4v6m0 4v2m-6-6h2m4 0h2m-6 4h2m4 0h2m-2-6v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2m14 0v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2m14 0v6" />
              </svg>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Quality Products</h3>
              <p className="text-gray-700 mb-4">
                We offer a wide range of high-quality products that meet your needs and exceed your expectations.
              </p>
              <Link
                to="/about"
                className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-xl transition-colors"
              >
                Learn More
              </Link>
            </div>
            <div className="flex-1 bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105 relative">
              <svg className="w-12 h-12 text-blue-600 mb-4 absolute top-4 right-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 10l5 5 5-5H7z" />
              </svg>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Excellent Customer Service</h3>
              <p className="text-gray-700 mb-4">
                Our dedicated team is here to provide you with the best service and support.
              </p>
              <Link
                to="/contact"
                className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-xl transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center bg-blue-600 py-12 rounded-xl shadow-2xl mb-16">
        <h2 className="text-3xl font-extrabold mb-4 text-white">
          Ready to Start Shopping?
        </h2>
        <p className="text-lg mb-6 text-white">
          Explore our exclusive range of products and find exactly what you need.
        </p>
        <Link
          to="/products"
          className="bg-white text-blue-600 py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition-colors transform hover:scale-105"
        >
          Start Shopping
        </Link>
      </section>

      {/* Customer Reviews Section */}
      <section className="bg-gray-50 py-12 rounded-xl shadow-lg mb-16">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-900">What Our Customers Say</h2>
          <div className="space-y-8">
            {/* Пример отзыва */}
            {[
              {
                text: 'Great products! I found exactly what I was looking for and the customer service was excellent.',
                author: 'Jane Doe'
              },
              {
                text: 'I had a wonderful shopping experience. The website is easy to navigate and the delivery was fast.',
                author: 'John Smith'
              },
              {
                text: 'Amazing selection of products and fantastic prices. I will definitely be shopping here again.',
                author: 'Emily Johnson'
              }
            ].map((review, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <p className="text-gray-700 mb-4">"{review.text}"</p>
                <p className="text-gray-900 font-semibold">- {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
