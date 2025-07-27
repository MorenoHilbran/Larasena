import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  const navItems = [
    {
      name: 'Gallery',
      path: '/gallery',
      icon: '🎨',
      description: 'Batik Designs'
    },
    {
      name: 'Konveksi',
      path: '/konveksi',
      icon: '🏭',
      description: 'Partners'
    }
  ]

  return (
    <aside className="w-64 bg-nusantara-light-brown shadow-lg border-r border-nusantara-soft-gold">
      <div className="p-6">
        <h2 className="text-lg font-bold text-nusantara-deep-red mb-4 font-inter">
          Navigation
        </h2>
        
        <nav className="space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-nusantara-deep-red text-nusantara-cream shadow-md'
                    : 'text-nusantara-deep-red hover:bg-nusantara-warm-beige hover:text-nusantara-deep-red'
                }`
              }
            >
              <span className="text-xl">{item.icon}</span>
              <div>
                <div className="font-medium">{item.name}</div>
                <div className="text-xs opacity-75">{item.description}</div>
              </div>
            </NavLink>
          ))}
        </nav>

        {/* Quick Actions */}
        <div className="mt-8 pt-6 border-t border-nusantara-soft-gold">
          <h3 className="text-sm font-semibold text-nusantara-deep-red mb-3">
            Quick Actions
          </h3>
          <NavLink
            to="/canvas"
            className="flex items-center space-x-2 p-3 bg-nusantara-deep-red text-nusantara-cream rounded-lg hover:bg-opacity-90 transition-colors"
          >
            <span className="text-lg">✨</span>
            <div>
              <div className="font-medium">Create Batik</div>
              <div className="text-xs opacity-75">Start designing</div>
            </div>
          </NavLink>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
