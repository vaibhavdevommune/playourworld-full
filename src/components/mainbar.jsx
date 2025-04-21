import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import Leads from '../pages/leads'; 

function Mainbar() {
  return (
    <div className="mainbar rounded-xl bg-white p-4 w-full overflow-auto h-screen">
      {/* <p className="text-lg font-semibold mb-2">This is page container</p> */}

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/leads" element={<Leads />} />
      </Routes>
    </div>
  );
}

export default Mainbar;
