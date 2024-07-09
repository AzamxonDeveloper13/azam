import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero-image.jpg'; // Убедитесь, что путь правильный

const Home = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 mt-10">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center md:space-x-12 lg:space-x-20 mb-16 bg-gradient-to-r from-blue-100 to-blue-300 p-8 rounded-lg shadow-xl">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl font-extrabold mb-4 text-blue-800 leading-tight">
            Welcome to <span className="text-blue-600">Our Store</span>!
          </h1>
          <p className="text-lg mb-6 text-gray-800">
            Discover the best products for you. Explore our latest collections and find what you need.
          </p>
          <Link
            to="/products"
            className="bg-blue-600 text-white p-4 rounded-lg shadow-md hover:bg-blue-700 transition-colors"
          >
            Shop Now
          </Link>
        </div>
        <div className="flex-1">
          <img
            src={heroImage}
            alt="Hero"
            className="w-full h-auto object-cover rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-blue-800">
          Our Popular Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Пример популярных продуктов */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
            <img src="https://via.placeholder.com/400x300" alt="Product 1" className="w-full h-40 object-cover mb-4 rounded-lg shadow-md" />
            <h3 className="text-xl font-bold mb-2 text-gray-800">Product 1</h3>
            <p className="text-gray-600 mb-4">$19.99</p>
            <Link
              to="/products"
              className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Product
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
            <img src="https://via.placeholder.com/400x300" alt="Product 2" className="w-full h-40 object-cover mb-4 rounded-lg shadow-md" />
            <h3 className="text-xl font-bold mb-2 text-gray-800">Product 2</h3>
            <p className="text-gray-600 mb-4">$29.99</p>
            <Link
              to="/products"
              className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Product
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
            <img src="https://via.placeholder.com/400x300" alt="Product 3" className="w-full h-40 object-cover mb-4 rounded-lg shadow-md" />
            <h3 className="text-xl font-bold mb-2 text-gray-800">Product 3</h3>
            <p className="text-gray-600 mb-4">$39.99</p>
            <Link
              to="/products"
              className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Product
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-blue-50 py-12 rounded-lg shadow-lg mb-16">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl font-extrabold mb-8 text-center text-blue-800">What We Offer</h2>
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="flex-1 mb-8 md:mb-0 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Quality Products</h3>
              <p className="text-gray-600 mb-4">
                We provide high-quality products to meet your needs and preferences.
              </p>
              <Link
                to="/about"
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Learn More
              </Link>
            </div>
            <div className="flex-1 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Excellent Customer Service</h3>
              <p className="text-gray-600 mb-4">
                Our team is dedicated to providing the best customer service experience.
              </p>
              <Link
                to="/contact"
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center bg-blue-600 py-12 rounded-lg shadow-xl">
        <h2 className="text-3xl font-extrabold mb-4 text-white">
          Ready to Start Shopping?
        </h2>
        <p className="text-lg mb-6 text-white">
          Explore our products and find what you are looking for.
        </p>
        <Link
          to="/products"
          className="bg-white text-blue-600 p-4 rounded-lg shadow-md hover:bg-gray-100 transition-colors"
        >
          Start Shopping
        </Link>
      </section>
    </div>
  );
};

export default Home;
