import React from 'react';

const Profile = () => {
  return (
    <div className="container mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">User Profile</h2>
      <div className="text-center">
        <img
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
        <p className="text-gray-600">john.doe@example.com</p>
      </div>
      <div className="text-center mt-6">
        <Link to="/register" className="btn btn-primary">Add Account</Link>
      </div>
    </div>
  );
};

export default Profile;
