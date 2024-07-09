import React from 'react';

const Userlist = () => {
  const users = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
    { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com' },
    // Добавьте больше пользователей по необходимости
  ];

  return (
    <div className="container mx-auto mt-10 p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">User List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 border-b-2 border-gray-200">ID</th>
              <th className="py-2 px-4 border-b-2 border-gray-200">Name</th>
              <th className="py-2 px-4 border-b-2 border-gray-200">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{user.id}</td>
                <td className="py-2 px-4 border-b">{user.name}</td>
                <td className="py-2 px-4 border-b">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Userlist;
