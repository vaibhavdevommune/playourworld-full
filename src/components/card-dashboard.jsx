import React from 'react';

function CardDashboard({ number, percentage, badgeClass, leading }) {
    return (
        <div className="card border border-[#f1f1f4] p-5 rounded-xl shadow-xs bg-white w-full w-md-2xl">
            <div className="flex items-center gap-2">
                <div className="number text-2xl font-bold text-gray-800">{number}</div>
                <span className={`px-2 py-1 rounded-lg text-xs font-medium badge ${badgeClass}`}>{percentage}</span>
            </div>
            <p className="text-gray-500 font-medium text-xs mt-2">{leading}</p>
        </div>
    );
}

export default CardDashboard;