import React from 'react';

const Employes = () => {
  const employees = [
    { id: 1, name: 'Alice Brown', position: 'Manager', email: 'alice.brown@example.com' },
    { id: 2, name: 'Bob Smith', position: 'Developer', email: 'bob.smith@example.com' },
    { id: 3, name: 'Charlie Johnson', position: 'Designer', email: 'charlie.johnson@example.com' },
  ];

  return (
    <div className="container mx-auto mt-10 p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Employes List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 border-b-2 border-gray-200">ID</th>
              <th className="py-2 px-4 border-b-2 border-gray-200">Name</th>
              <th className="py-2 px-4 border-b-2 border-gray-200">Position</th>
              <th className="py-2 px-4 border-b-2 border-gray-200">Email</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{employee.id}</td>
                <td className="py-2 px-4 border-b">{employee.name}</td>
                <td className="py-2 px-4 border-b">{employee.position}</td>
                <td className="py-2 px-4 border-b">{employee.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employes;
