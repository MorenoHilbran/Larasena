import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Layout = () => {
  return (
    <div className="flex flex-col h-screen bg-genz-secondary">
      {/* Top Navbar */}
      <Navbar />
      
      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-genz-secondary p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
