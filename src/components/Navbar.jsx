import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'
import { Sparkles, Palette, Flame, LogOut, LogIn, Bell, User } from 'lucide-react'

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const { getThemeClasses } = useTheme()
  const themeClasses = getThemeClasses()

  return (
    <nav className="bg-genz-gradient shadow-lg h-16 flex items-center justify-between px-6 z-50 relative overflow-hidden">
      {/* Background Pattern - Always Gen-Z style */}
      <div className="absolute inset-0 opacity-20">
        <motion.div className="absolute top-2 left-10" animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <Sparkles className="w-6 h-6 text-white" />
        </motion.div>
        <motion.div className="absolute top-4 right-20" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <Palette className="w-5 h-5 text-white" />
        </motion.div>
        <motion.div className="absolute bottom-3 left-32" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}>
          <Flame className="w-4 h-4 text-white" />
        </motion.div>
      </div>

      {/* Logo */}
      <motion.div 
        className="flex items-center space-x-3 relative z-10"
        whileHover={{ scale: 1.02 }}
      >
        <motion.img 
          src="/favicon.png" 
          alt="Larasena Logo" 
          className="w-10 h-10 object-contain"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        />
        <div>
          <motion.h1 
            className="text-2xl font-bold text-white font-poppins"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Larasena
          </motion.h1>
          <motion.span 
            className="text-sm text-white/80 font-medium font-poppins"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Gen-Z Batik Studio
          </motion.span>
        </div>
      </motion.div>

      {/* Center Section - Brand Description */}
      <motion.div 
        className="flex items-center space-x-4 relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="text-xs text-white/60 font-poppins flex items-center space-x-1">
          <span>Digitizing Heritage. Empowering Batik.</span>
          <Sparkles className="w-3 h-3" />
        </div>
      </motion.div>

      {/* User Section */}
      <motion.div 
        className="flex items-center space-x-4 relative z-10"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        {isLoggedIn ? (
          <div className="flex items-center space-x-3">
            <motion.div 
              className="w-8 h-8 rounded-full flex items-center justify-center bg-genz-turquoise"
              whileHover={{ scale: 1.1 }}
            >
              <User className="w-4 h-4 text-white" />
            </motion.div>
            <span className="text-white font-medium font-poppins">
              User Name
            </span>
            <motion.button 
              onClick={() => setIsLoggedIn(false)}
              whileHover={{ scale: 1.05 }}
              className="text-white/80 hover:text-white transition-colors text-sm flex items-center space-x-1"
            >
              <LogOut className="w-3 h-3" />
              <span>Logout</span>
            </motion.button>
          </div>
        ) : (
          <motion.button 
            onClick={() => setIsLoggedIn(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 rounded-lg transition-all duration-200 font-medium flex items-center space-x-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30"
            style={{
              boxShadow: '0 4px 15px rgba(255, 255, 255, 0.2)'
            }}
          >
            <LogIn className="w-4 h-4" />
            <span>Login</span>
          </motion.button>
        )}

        {/* Notification Badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: 'spring' }}
          className="relative"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 h-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            <Bell className="w-4 h-4" />
          </motion.button>
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [1, 0.7, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-1 -right-1 w-3 h-3 bg-genz-coral rounded-full border-2 border-white"
          />
        </motion.div>
      </motion.div>
    </nav>
  )
}

export default Navbar
