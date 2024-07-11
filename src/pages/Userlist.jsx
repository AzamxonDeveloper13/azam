import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';

const UserList = ({ users, onUpdateUser }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editedUser, setEditedUser] = useState({ name: '', email: '', phone: '' });

  const openDialog = (user) => {
    setSelectedUser(user);
    setEditedUser({ name: user.name, email: user.email, phone: user.phone });
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedUser(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    onUpdateUser(selectedUser.id, editedUser);
    closeDialog();
  };

  return (
    <div className="container mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-extrabold mb-10 text-center text-blue-700">User List</h2>
      {users.length === 0 ? (
        <p className="text-center text-gray-600">No users registered.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-gray-600">
            <thead>
              <tr className="border-b bg-blue-100">
                <th className="py-3 px-6 text-blue-800">Name</th>
                <th className="py-3 px-6 text-blue-800">Email</th>
                <th className="py-3 px-6 text-blue-800">Phone</th>
                <th className="py-3 px-6 text-blue-800">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="border-b hover:bg-gray-100 transition-colors duration-300">
                  <td className="py-4 px-6">{user.name}</td>
                  <td className="py-4 px-6">{user.email}</td>
                  <td className="py-4 px-6">{user.phone}</td>
                  <td className="py-4 px-6 flex space-x-2">
                    <button
                      onClick={() => openDialog(user)}
                      className="btn btn-secondary text-white"
                    >
                      Изменить
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal for Editing User */}
      {selectedUser && (
        <Dialog open={isDialogOpen} onClose={closeDialog} className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen p-4">
            <Dialog.Panel className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-lg">
              <Dialog.Title as="h3" className="text-xl font-semibold mb-4 text-center text-blue-700">
                Edit User
              </Dialog.Title>
              <form onSubmit={handleUpdate} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={editedUser.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={editedUser.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    value={editedUser.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="flex justify-between mt-4">
                  <button
                    type="submit"
                    className="btn btn-primary text-white"
                  >
                    Сохранить
                  </button>
                  <button
                    type="button"
                    onClick={closeDialog}
                    className="btn btn-outline text-blue-700"
                  >
                    Отменить
                  </button>
                </div>
              </form>
            </Dialog.Panel>
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default UserList;
