import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-nusantara-cream flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-lg border border-nusantara-warm-beige p-8 max-w-md w-full text-center"
      >
        <div className="text-8xl mb-6">🎨</div>
        <h1 className="text-4xl font-bold text-nusantara-deep-red mb-4">
          404
        </h1>
        <h2 className="text-xl font-semibold text-nusantara-soft-gold mb-4">
          Page Not Found
        </h2>
        <p className="text-nusantara-soft-gold mb-8">
          The page you're looking for doesn't exist. Let's get you back to creating beautiful batik designs!
        </p>
        <div className="space-y-3">
          <button
            onClick={() => navigate('/gallery')}
            className="w-full bg-nusantara-deep-red text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Go to Gallery
          </button>
          <button
            onClick={() => navigate('/canvas')}
            className="w-full bg-nusantara-soft-gold text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Start Creating
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default NotFound
