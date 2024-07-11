import React, { useState } from 'react';

const Employes = () => {
  const [selectedRole, setSelectedRole] = useState('All');

  const employees = [
    { id: 1, name: 'Alice Johnson', role: 'Manager', email: 'alice@example.com', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Bob Smith', role: 'Developer', email: 'bob@example.com', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Charlie Brown', role: 'Designer', email: 'charlie@example.com', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Dana White', role: 'HR', email: 'dana@example.com', image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Eva Green', role: 'Marketing', email: 'eva@example.com', image: 'https://via.placeholder.com/150' },
  ];

  const filteredEmployees = selectedRole === 'All' ? employees : employees.filter(employee => employee.role === selectedRole);

  return (
    <div className="bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 min-h-screen py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-5xl font-bold mb-12 text-center text-gray-800 tracking-wide animate__animated animate__fadeIn animate__delay-1s">
          Meet Our Talented Team
        </h2>
        <div className="text-center mb-8">
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="bg-white border border-gray-300 rounded-lg shadow-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="All">All Roles</option>
            <option value="Manager">Manager</option>
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="HR">HR</option>
            <option value="Marketing">Marketing</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredEmployees.map(employee => (
            <div
              key={employee.id}
              className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out animate__animated animate__fadeIn"
            >
              <div className="relative">
                <img
                  src={employee.image}
                  alt={employee.name}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent rounded-b-lg p-4">
                  <h3 className="text-xl font-semibold text-white">{employee.name}</h3>
                  <p className="text-sm text-gray-300">{employee.role}</p>
                </div>
              </div>
              <div className="p-6 text-center">
                <p className="text-gray-600 mb-4">{employee.email}</p>
                <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
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
