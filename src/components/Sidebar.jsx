import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'
import { 
  Palette, 
  Sparkles, 
  Rocket, 
  Factory, 
  Book, 
  Folder, 
  Building, 
  Zap,
  Star,
  Circle
} from 'lucide-react'

const Sidebar = () => {
  const { getThemeClasses } = useTheme()
  const themeClasses = getThemeClasses()

  const navItems = [
    {
      name: 'Galeri Nusantara',
      path: '/gallery',
      icon: Palette,
      description: 'Kreasi Bangsa'
    },
    {
      name: 'Motif Batik',
      path: '/motifs',
      icon: Sparkles,
      description: 'Koleksi Batik Indonesia'
    },
    {
      name: 'Konveksi',
      path: '/konveksi',
      icon: Factory,
      description: 'Tempat Produksi Batik'
    }
  ]

  return (
    <aside className="w-64 shadow-lg border-r transition-all duration-300 bg-gradient-to-b from-genz-turquoise/10 to-genz-coral/10 border-genz-turquoise/20">
      <div className="p-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <h2 className="text-lg font-bold mb-2 text-genz-primary font-poppins flex items-center space-x-2">
            <span>Ruang Nusantara</span>
            <Zap className="w-4 h-4" />
          </h2>
          <div className="text-xs text-genz-turquoise font-medium flex items-center space-x-1">
            <span>Teknologi Bertemu Tradisi!</span>
            <Sparkles className="w-3 h-3" />
          </div>
        </motion.div>
        
        {/* Navigation Items */}
        <nav className="space-y-2">
          {navItems.map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) => {
                  const baseClasses = `flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 group relative overflow-hidden`
                  
                  return `${baseClasses} ${
                    isActive
                      ? 'bg-genz-gradient text-white shadow-lg transform scale-105'
                      : 'text-genz-primary hover:bg-white/50 hover:shadow-md hover:scale-102 hover:text-genz-turquoise'
                  }`
                }}
              >
                {({ isActive }) => (
                  <>
                    {/* Animated Background */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-genz-coral to-genz-turquoise opacity-20"
                        animate={{ 
                          scale: [1, 1.1, 1],
                          opacity: [0.2, 0.4, 0.2]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    )}
                    
                    <motion.div 
                      className="text-lg relative z-10"
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      transition={{ duration: 0.3 }}
                    >
                      <item.icon className="w-5 h-5" />
                    </motion.div>
                    <div className="relative z-10">
                      <div className="font-medium font-poppins">
                        {item.name}
                      </div>
                      <div className="text-xs opacity-75 font-poppins">
                        {item.description}
                      </div>
                    </div>

                    {/* Hover Effect Indicator */}
                    <motion.div
                      className="absolute right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      ✨
                    </motion.div>
                  </>
                )}
              </NavLink>
            </motion.div>
          ))}
        </nav>

        {/* Quick Actions */}
        <motion.div 
          className="mt-8 pt-6 border-t border-opacity-30"
          style={{ 
            borderColor: '#00BFA6' 
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-sm font-semibold mb-3 text-genz-primary font-poppins">
            ⚡ Kreasikan Inspirasimu
          </h3>
          
          {/* Gawangan Quick Action */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mb-3">
            <NavLink
              to="/projects"
              className="flex items-center space-x-2 p-3 rounded-lg transition-all duration-200 relative overflow-hidden bg-gradient-to-r from-genz-purple to-genz-coral text-white hover:shadow-xl hover:shadow-genz-purple/30"
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-genz-purple via-genz-coral to-genz-turquoise opacity-80"
                animate={{ 
                  x: ['-100%', '100%'],
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-genz-purple to-genz-coral opacity-90" />
              
              <motion.div 
                className="text-lg relative z-10"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Rocket className="w-5 h-5" />
              </motion.div>
              <div className="relative z-10">
                <div className="font-medium font-poppins">
                  Gawangan
                </div>
                <div className="text-xs opacity-75 font-poppins flex items-center space-x-1">
                  <span>Kreasi Batik saya</span>
                  <Sparkles className="w-3 h-3" />
                </div>
              </div>

              {/* Floating particles */}
              <div className="absolute inset-0 pointer-events-none">
                <motion.div
                  className="absolute top-1 right-1"
                  animate={{ 
                    y: [0, -5, 0],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    delay: 0
                  }}
                >
                  <Star className="w-3 h-3 text-white" />
                </motion.div>
                <motion.div
                  className="absolute bottom-1 left-1"
                  animate={{ 
                    y: [0, -3, 0],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    delay: 0.5
                  }}
                >
                  <Rocket className="w-3 h-3 text-white" />
                </motion.div>
              </div>
            </NavLink>
          </motion.div>

          {/* Nglowong Canvas Action */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <NavLink
              to="/canvas"
              className="flex items-center space-x-2 p-3 rounded-lg transition-all duration-200 relative overflow-hidden bg-genz-gradient text-white hover:shadow-xl hover:shadow-genz-turquoise/30"
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-genz-coral via-genz-turquoise to-genz-purple opacity-80"
                animate={{ 
                  x: ['-100%', '100%'],
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-genz-coral to-genz-turquoise opacity-90" />
              
              <motion.div 
                className="text-lg relative z-10"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Palette className="w-5 h-5" />
              </motion.div>
              <div className="relative z-10">
                <div className="font-medium font-poppins">
                  Nglowong
                </div>
                <div className="text-xs opacity-75 font-poppins flex items-center space-x-1">
                  <span>Mulai membatik!</span>
                  <Zap className="w-3 h-3" />
                </div>
              </div>

              {/* Floating particles */}
              <div className="absolute inset-0 pointer-events-none">
                <motion.div
                  className="absolute top-1 right-1"
                  animate={{ 
                    y: [0, -5, 0],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    delay: 0
                  }}
                >
                  <Sparkles className="w-3 h-3 text-white" />
                </motion.div>
                <motion.div
                  className="absolute bottom-1 left-1"
                  animate={{ 
                    y: [0, -3, 0],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    delay: 0.5
                  }}
                >
                  <Star className="w-3 h-3 text-white" />
                </motion.div>
              </div>
            </NavLink>
          </motion.div>
        </motion.div>
      </div>
    </aside>
  )
}

export default Sidebar
