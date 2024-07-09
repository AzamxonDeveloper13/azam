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
    <div className="container mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-xl">
      <h2 className="text-3xl font-extrabold mb-10 text-center text-blue-600">Our Employees</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {employees.map(employee => (
          <div key={employee.id} className="card bg-white shadow-md rounded-lg overflow-hidden">
            <img src={employee.image} alt={employee.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{employee.name}</h3>
              <p className="text-lg text-gray-700 mb-2">{employee.role}</p>
              <p className="text-gray-600">{employee.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Employes;
