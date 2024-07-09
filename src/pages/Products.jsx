import React from 'react';

const Products = () => {
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
    { id: 11, name: 'GoPro HERO9', price: '$399', image: 'https://via.placeholder.com/150' },
    { id: 12, name: 'DJI Mavic Air 2', price: '$799', image: 'https://via.placeholder.com/150' },
    { id: 13, name: 'Fitbit Charge 5', price: '$179', image: 'https://via.placeholder.com/150' },
    { id: 14, name: 'Roku Streaming Stick+', price: '$49', image: 'https://via.placeholder.com/150' },
    { id: 15, name: 'Nikon Z6 II', price: '$1999', image: 'https://via.placeholder.com/150' },
    { id: 16, name: 'Canon EOS R6', price: '$2499', image: 'https://via.placeholder.com/150' },
    { id: 17, name: 'Sony Alpha a7 III', price: '$1999', image: 'https://via.placeholder.com/150' },
    { id: 18, name: 'Bose QuietComfort 35 II', price: '$299', image: 'https://via.placeholder.com/150' },
    { id: 19, name: 'Oculus Quest 2', price: '$299', image: 'https://via.placeholder.com/150' },
    { id: 20, name: 'Apple AirPods Pro', price: '$249', image: 'https://via.placeholder.com/150' },
    { id: 21, name: 'Sony Bravia 55" 4K TV', price: '$999', image: 'https://via.placeholder.com/150' },
    { id: 22, name: 'LG OLED65CXPUA', price: '$1999', image: 'https://via.placeholder.com/150' },
    { id: 23, name: 'Samsung Q80T 65" 4K TV', price: '$1799', image: 'https://via.placeholder.com/150' },
    { id: 24, name: 'Dell XPS 13', price: '$1299', image: 'https://via.placeholder.com/150' },
    { id: 25, name: 'HP Spectre x360', price: '$1399', image: 'https://via.placeholder.com/150' },
    { id: 26, name: 'Asus ROG Zephyrus G14', price: '$1499', image: 'https://via.placeholder.com/150' },
    { id: 27, name: 'Acer Predator Helios 300', price: '$1199', image: 'https://via.placeholder.com/150' },
    { id: 28, name: 'MSI GS66 Stealth', price: '$1799', image: 'https://via.placeholder.com/150' },
    { id: 29, name: 'Razer Blade 15', price: '$1999', image: 'https://via.placeholder.com/150' },
    { id: 30, name: 'Apple iPad Pro', price: '$999', image: 'https://via.placeholder.com/150' },
    { id: 31, name: 'Samsung Galaxy Note20 Ultra', price: '$1299', image: 'https://via.placeholder.com/150' },
    { id: 32, name: 'Google Pixel 6', price: '$699', image: 'https://via.placeholder.com/150' },
    { id: 33, name: 'OnePlus 9 Pro', price: '$969', image: 'https://via.placeholder.com/150' },
    { id: 34, name: 'Xiaomi Mi 11 Ultra', price: '$1199', image: 'https://via.placeholder.com/150' },
    { id: 35, name: 'Huawei P40 Pro', price: '$999', image: 'https://via.placeholder.com/150' },
    { id: 36, name: 'Oppo Find X3 Pro', price: '$1099', image: 'https://via.placeholder.com/150' },
    { id: 37, name: 'Vivo X60 Pro+', price: '$899', image: 'https://via.placeholder.com/150' },
    { id: 38, name: 'Realme GT', price: '$499', image: 'https://via.placeholder.com/150' },
    { id: 39, name: 'ZTE Axon 30 Ultra', price: '$749', image: 'https://via.placeholder.com/150' },
    { id: 40, name: 'Sony Xperia 1 III', price: '$1299', image: 'https://via.placeholder.com/150' },
    { id: 41, name: 'Motorola Edge+', price: '$999', image: 'https://via.placeholder.com/150' },
    { id: 42, name: 'Nokia 8.3 5G', price: '$699', image: 'https://via.placeholder.com/150' },
    { id: 43, name: 'Poco F3', price: '$349', image: 'https://via.placeholder.com/150' },
    { id: 44, name: 'Infinix Zero 8', price: '$299', image: 'https://via.placeholder.com/150' },
    { id: 45, name: 'Tecno Camon 17', price: '$229', image: 'https://via.placeholder.com/150' },
    { id: 46, name: 'Itel Vision 1', price: '$129', image: 'https://via.placeholder.com/150' },
    { id: 47, name: 'Hisense U8G 65" 4K TV', price: '$1099', image: 'https://via.placeholder.com/150' },
    { id: 48, name: 'TCL 6-Series 65" 4K TV', price: '$999', image: 'https://via.placeholder.com/150' },
    { id: 49, name: 'Vizio P-Series Quantum 65" 4K TV', price: '$1299', image: 'https://via.placeholder.com/150' },
    { id: 50, name: 'Roku Ultra', price: '$99', image: 'https://via.placeholder.com/150' },
    { id: 51, name: 'Chromecast with Google TV', price: '$49', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="container mx-auto mt-10 p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
