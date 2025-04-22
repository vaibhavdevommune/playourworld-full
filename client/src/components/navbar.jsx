import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import user from '../assets/images/user.jpg';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="navbar ms-auto">
      <div className="flex justify-end relative group max-w-sm p-2 rounded-md">
        <img src={user} alt="User" className="w-[32px] h-[32px] aspect-square rounded-full cursor-pointer" />

        <div className="absolute top-12 right-0 bg-white rounded-lg shadow-sm z-10 w-[200px] max-h-0 overflow-hidden group-hover:max-h-[500px] transition-all duration-300 ease-in-out">
          <div className="p-3">
            <div className="flex items-center gap-2">
              <img src={user} alt="User" className="w-[42px] h-[42px] aspect-square rounded-full" />
              <div className="flex flex-col">
                <span className="text-sm text-gray-800 font-medium">Admin</span>
                <span className="text-xs text-gray-500 font-semibold">
                  Admin@admin.com
                </span>
              </div>
            </div>
          </div>
          <div className="border-t border-[#f1f1f4] p-2 px-3">
            <ul className="p-0">
              <li className="mt-1">
                <Link to="#" className="text-sm hover:text-blue-500">
                  Profile
                </Link>
              </li>
              <li className="mt-1">
                <Link to="#" className="text-sm hover:text-blue-500">
                  Setting
                </Link>
              </li>
              <li className="mt-1">
                <button
                  onClick={handleLogout}
                  className="text-sm hover:text-blue-500 w-full text-left"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
