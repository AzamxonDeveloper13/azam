import React from 'react';

const Employes = () => {
  const employees = [
    { id: 1, name: 'Alice Johnson', role: 'Manager', email: 'alice@example.com', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Bob Smith', role: 'Developer', email: 'bob@example.com', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Charlie Brown', role: 'Designer', email: 'charlie@example.com', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Dana White', role: 'HR', email: 'dana@example.com', image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Eva Green', role: 'Marketing', email: 'eva@example.com', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="bg-gradient-to-r from-indigo-100 to-blue-200 min-h-screen py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-5xl font-extrabold mb-12 text-center text-blue-800 tracking-wide">
          Meet Our Talented Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {employees.map(employee => (
            <div
              key={employee.id}
              className="bg-white border border-gray-200 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out"
            >
              <div className="relative">
                <img
                  src={employee.image}
                  alt={employee.name}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent rounded-b-lg p-4">
                  <h3 className="text-xl font-semibold text-white">{employee.name}</h3>
                  <p className="text-sm text-gray-300">{employee.role}</p>
                </div>
              </div>
              <div className="p-6 text-center">
                <p className="text-gray-600 mb-4">{employee.email}</p>
                <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gradient-to-l hover:from-blue-600 hover:to-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105">
                  Contact
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Employes;
