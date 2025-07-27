import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { batikDesigns, batikCategories } from '../data/mockData'

const Gallery = () => {
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = React.useState('All')

  const filteredDesigns = selectedCategory === 'All' 
    ? batikDesigns 
    : batikDesigns.filter(design => design.category === selectedCategory)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-nusantara-deep-red font-inter">
            Batik Design Gallery
          </h1>
          <p className="text-nusantara-soft-gold mt-2">
            Explore and create beautiful 3D batik patterns
          </p>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/canvas')}
          className="bg-nusantara-deep-red text-nusantara-cream px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors font-medium flex items-center space-x-2"
        >
          <span className="text-lg">+</span>
          <span>Create New Batik</span>
        </motion.button>
      </div>

      {/* Category Filter */}
      <div className="flex space-x-2">
        {batikCategories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedCategory === category
                ? 'bg-nusantara-deep-red text-nusantara-cream'
                : 'bg-nusantara-warm-beige text-nusantara-deep-red hover:bg-nusantara-light-brown'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Design Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        layout
      >
        {filteredDesigns.map((design) => (
          <motion.div
            key={design.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden border border-nusantara-warm-beige cursor-pointer"
            onClick={() => navigate('/canvas', { state: { designId: design.id } })}
          >
            {/* Thumbnail */}
            <div className="h-48 bg-gradient-to-br from-nusantara-cream to-nusantara-light-brown flex items-center justify-center">
              <div className="w-24 h-24 bg-nusantara-soft-gold rounded-lg flex items-center justify-center">
                <span className="text-2xl text-white">👔</span>
              </div>
            </div>
            
            {/* Design Info */}
            <div className="p-4">
              <h3 className="font-semibold text-nusantara-deep-red mb-1">
                {design.name}
              </h3>
              <p className="text-sm text-nusantara-soft-gold mb-3">
                {design.category}
              </p>
              
              {/* Color Palette */}
              <div className="flex space-x-1">
                {design.colors.map((color, index) => (
                  <div
                    key={index}
                    className="w-4 h-4 rounded-full border border-gray-300"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Empty State */}
      {filteredDesigns.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🎨</div>
          <h3 className="text-xl font-semibold text-nusantara-deep-red mb-2">
            No designs found
          </h3>
          <p className="text-nusantara-soft-gold">
            Try selecting a different category or create a new design.
          </p>
        </div>
      )}
    </div>
  )
}

export default Gallery
