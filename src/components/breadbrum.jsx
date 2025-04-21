import React from 'react';
import { Link } from 'react-router-dom';

function Breadbrum({ pageName }) {
    return (
        <div className="flex flex-col justify-between py-2">
            <h3 className="text-xl font-semibold">{pageName}</h3>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Link to="/dashboard" className="text-blue-600 hover:underline">Dashboard</Link>
                <span>/</span>
                <span className="text-gray-800">{pageName}</span>
            </div>
        </div>
    );
}

export default Breadbrum;