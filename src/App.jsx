import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar'
import Navbar from './components/navbar'
import Mainbar from './components/mainbar'
import Login from './pages/auth/Login';
import './assets/css/index.css';

function App() {

  return (
    <>
      <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/*"
        element={
          <div className="flex main-container bg-gray-100 h-screen">
            <Sidebar />
            <div className="main flex flex-col gap-2 px-4 p-2 w-full overflow-auto">
              <Navbar />
              <Mainbar />
            </div>
          </div>
        }
      />
    </Routes>
    </>
  )
}

export default App
