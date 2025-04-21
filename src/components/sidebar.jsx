import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // ✅ import useLocation
import logo from '../assets/images/favi.svg';

function Sidebar() {
    const location = useLocation(); // ✅ get current URL path

    const menuItems = [
        { name: 'Dashboard', icon: 'dashboard', to: '/dashboard' },
        { name: 'Leads', icon: 'leaderboard', to: '/leads' },
        { name: 'Settings', icon: 'settings', to: '#' },
    ];

    return (
        <div className="sidebar bg-gray-100 w-[250px] h-screen">
            <div className="sidebar-header flex items-center justify-between p-4 pe-0">
                <span className="material-symbols-outlined cursor-pointer">menu</span>
                <div className="flex items-center gap-2">
                    <img src={logo} alt="logo" className="w-[24px] h-[24px]" />
                    <p className="mb-0 font-medium">PlanYourWorld</p>
                </div>
            </div>

            <div className="sidebar-body flex flex-col gap-2 p-3">
                {menuItems.map((item, index) => {
                    const isActive = location.pathname === item.to;

                    return (
                        <Link to={item.to} key={index} className={`flex items-center gap-2 p-2 rounded hover:text-blue-600 transition ${isActive ? 'bg-blue-100 text-blue-600 font-semibold' : ''}`}>
                            <div className={`menu-icon w-[24px] h-[24px] flex justify-center items-center p-1 aspect-square rounded ${isActive ? 'bg-white hover:text-gray-500': ''}`}>
                                <span className="material-symbols-outlined text-20">{item.icon}</span>
                            </div>
                            <span className="text-sm">{item.name}</span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default Sidebar;
