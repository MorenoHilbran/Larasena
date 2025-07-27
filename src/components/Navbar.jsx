import React from 'react'
import { useState } from 'react'

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <nav className="bg-nusantara-deep-red shadow-lg h-16 flex items-center justify-between px-6 z-50">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <img 
          src="/favicon.png" 
          alt="Larasena Logo" 
          className="w-10 h-10 object-contain"
        />
        <h1 className="text-2xl font-bold text-nusantara-cream font-inter">
          Larasena
        </h1>
        <span className="text-sm text-nusantara-light-brown font-medium">
          3D Batik Studio
        </span>
      </div>

      {/* User Section */}
      <div className="flex items-center space-x-4">
        {isLoggedIn ? (
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-nusantara-soft-gold rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">U</span>
            </div>
            <span className="text-nusantara-cream font-medium">User Name</span>
            <button 
              onClick={() => setIsLoggedIn(false)}
              className="text-nusantara-light-brown hover:text-nusantara-cream transition-colors text-sm"
            >
              Logout
            </button>
          </div>
        ) : (
          <button 
            onClick={() => setIsLoggedIn(true)}
            className="bg-nusantara-soft-gold hover:bg-nusantara-light-brown text-white px-4 py-2 rounded-lg transition-colors font-medium"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  )
}

export default Navbar
