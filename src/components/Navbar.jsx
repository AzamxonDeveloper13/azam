import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar fixed top-0 left-0 w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-4 shadow-lg">
      <div className="flex-1">
        <a className="text-xl font-bold hover:text-gray-200">MyBrand</a>
      </div>
      <div className="flex-none gap-4">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar hover:bg-gray-200"
          >
            <div className="w-10 rounded-full">
              <img
                alt="User Avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white text-black rounded-box z-[1] mt-3 w-52 p-2 shadow-lg"
          >
            <li>
              <a className="justify-between hover:bg-gray-200">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a className="hover:bg-gray-200">Settings</a></li>
            <li><a className="hover:bg-gray-200">Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
