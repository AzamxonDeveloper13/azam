// src/components/Profile.jsx

import React from 'react';

const Profile = ({ user }) => {
  if (!user) return <div className="container mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-xl text-center"><h2 className="text-3xl font-extrabold mb-10 text-center text-blue-600">No user logged in</h2></div>;

  return (
    <div className="container mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-xl">
      <h2 className="text-3xl font-extrabold mb-10 text-center text-blue-600">Profile</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
      </div>
    </div>
  );
};

export default Profile;
