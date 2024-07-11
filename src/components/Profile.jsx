import React from 'react';

const Profile = ({ user }) => {
  return (
    <div className="container mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-xl">
      {user ? (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-extrabold mb-10 text-center text-blue-600">Profile</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Name: {user.name}</h3>
            <p className="text-lg text-gray-700 mb-2">Email: {user.email}</p>
            <p className="text-lg text-gray-700 mb-2">Phone: {user.phone}</p>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-700">No user profile available.</p>
      )}
    </div>
  );
};

export default Profile;
