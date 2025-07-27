import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'
import { motifLibrary, motifStyles, motifRegions } from '../data/mockData'
import { 
  Search, 
  Filter, 
  Star, 
  Sparkles, 
  Palette, 
  Zap, 
  MapPin, 
  Eye, 
  Heart,
  Building,
  Brush,
  Lightbulb,
  Globe,
  TrendingUp,
  User,
  Calendar
} from 'lucide-react'

const MotifLibrary = () => {
  const navigate = useNavigate()
  const { getThemeClasses } = useTheme()
  const themeClasses = getThemeClasses()
  
  const [selectedStyle, setSelectedStyle] = useState('All')
  const [selectedRegion, setSelectedRegion] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('popularity')

  // Mock data fallback jika import gagal
  const mockMotifLibrary = [
    {
      id: 1,
      name: 'Parang Klasik',
      description: 'Classic diagonal pattern representing strength',
      origin: 'Yogyakarta',
      style: 'traditional',
      region: 'java',
      complexity: 'Medium',
      popularityScore: 95,
      creator: 'Master Artisan',
      colors: ['#B33F00', '#D8B08C', '#A67B5B']
    },
    {
      id: 2,
      name: 'Mega Mendung',
      description: 'Cloud motif symbolizing patience',
      origin: 'Cirebon',
      style: 'traditional',
      region: 'java',
      complexity: 'Complex',
      popularityScore: 88,
      creator: 'Traditional Craftsman',
      colors: ['#00BFA6', '#FF5E6C', '#8B5CF6']
    },
    {
      id: 3,
      name: 'Modern Fusion',
      description: 'Contemporary batik design',
      origin: 'Jakarta',
      style: 'modern',
      region: 'java',
      complexity: 'Simple',
      popularityScore: 92,
      creator: 'Gen-Z Designer',
      colors: ['#FF5E6C', '#00BFA6', '#8B5CF6']
    }
  ]

  // Gunakan data dari import atau fallback
  const motifs = motifLibrary || mockMotifLibrary
  const styles = motifStyles || ['traditional', 'modern', 'experimental']
  const regions = motifRegions || ['java', 'sumatra', 'kalimantan', 'sulawesi']

  const filteredMotifs = motifs
    .filter(motif => 
      (selectedStyle === 'All' || motif.style === selectedStyle) &&
      (selectedRegion === 'All' || motif.region === selectedRegion) &&
      (searchTerm === '' || motif.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       motif.origin.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'popularity': return b.popularityScore - a.popularityScore
        case 'name': return a.name.localeCompare(b.name)
        case 'origin': return a.origin.localeCompare(b.origin)
        default: return 0
      }
    })

  const getComplexityColor = (complexity) => {
    switch (complexity) {
      case 'Simple': return 'text-green-500'
      case 'Medium': return 'text-yellow-500'
      case 'Complex': return 'text-red-500'
      default: return 'text-gray-500'
    }
  }

  const getStyleIconByType = (style) => {
    switch (style) {
      case 'traditional': return <Building className="w-4 h-4" />
      case 'modern': return <Brush className="w-4 h-4" />
      case 'experimental': return <Lightbulb className="w-4 h-4" />
      default: return <Palette className="w-4 h-4" />
    }
  }

  return (
    <div className="space-y-6 font-poppins">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-2xl p-8"
        style={{
          background: 'linear-gradient(135deg, #FF5E6C 0%, #00BFA6 50%, #8B5CF6 100%)'
        }}
      >
        <div className="relative z-10">
          <motion.h1 
            className="text-4xl font-bold text-white mb-2 flex items-center space-x-3"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-8 h-8" />
            <span>Motif Library</span>
            <Sparkles className="w-8 h-8" />
          </motion.h1>
          <motion.p 
            className="text-white/90 text-lg flex items-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span>Discover epic traditional & experimental batik patterns!</span>
            <Zap className="w-5 h-5" />
          </motion.p>
        </div>
        
        <motion.div 
          className="absolute top-4 right-4 opacity-30"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Palette className="w-16 h-16 text-white" />
        </motion.div>
      </motion.div>

      {/* Search and Filters */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className={`${themeClasses.card} p-6 rounded-xl`}
      >
        {/* Search Bar */}
        <div className="mb-6">
          <label className={`block text-sm font-medium ${themeClasses.text} mb-2 flex items-center space-x-1`}>
            <Search className="w-4 h-4" />
            <span>Search Motifs</span>
          </label>
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Type motif name..."
              className="w-full px-4 py-3 rounded-lg border transition-all duration-200 border-genz-turquoise/30 focus:border-genz-turquoise focus:ring-2 focus:ring-genz-turquoise/20"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Filter Controls */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Style Filter */}
          <div>
            <label className={`block text-sm font-medium ${themeClasses.text} mb-2 flex items-center space-x-1`}>
              <Filter className="w-4 h-4" />
              <span>Style Vibe</span>
            </label>
            <select
              value={selectedStyle}
              onChange={(e) => setSelectedStyle(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border transition-all duration-200 border-genz-turquoise/30 focus:border-genz-turquoise focus:ring-2 focus:ring-genz-turquoise/20"
            >
              <option value="All">All Vibes ✨</option>
              {styles.map(style => (
                <option key={style} value={style}>
                  {style}
                </option>
              ))}
            </select>
          </div>

          {/* Region Filter */}
          <div>
            <label className={`block text-sm font-medium ${themeClasses.text} mb-2 flex items-center space-x-1`}>
              <MapPin className="w-4 h-4" />
              <span>Region</span>
            </label>
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border transition-all duration-200 border-genz-turquoise/30 focus:border-genz-turquoise focus:ring-2 focus:ring-genz-turquoise/20"
            >
              <option value="All">All Islands</option>
              {regions.map(region => (
                <option key={region} value={region}>
                  {region.charAt(0).toUpperCase() + region.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Sort Control */}
          <div>
            <label className={`block text-sm font-medium ${themeClasses.text} mb-2 flex items-center space-x-1`}>
              <TrendingUp className="w-4 h-4" />
              <span>Sort By</span>
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border transition-all duration-200 border-genz-turquoise/30 focus:border-genz-turquoise focus:ring-2 focus:ring-genz-turquoise/20"
            >
              <option value="popularity">Most Popular</option>
              <option value="name">Name A-Z</option>
              <option value="origin">Origin</option>
            </select>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          {[
            { label: 'Total Motifs', value: motifs.length, icon: Palette },
            { label: 'Styles', value: styles.length, icon: Building },
            { label: 'Regions', value: regions.length, icon: Globe },
            { label: 'Popular This Week', value: motifs.filter(m => m.popularityScore > 85).length, icon: TrendingUp }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-4 rounded-lg bg-gradient-to-r from-genz-turquoise/10 to-genz-coral/10 border border-genz-turquoise/20"
            >
              <div className="mb-1">
                <stat.icon className="w-6 h-6 mx-auto text-genz-turquoise" />
              </div>
              <div className={`text-2xl font-bold ${themeClasses.heading}`}>{stat.value}</div>
              <div className={`text-sm ${themeClasses.text}`}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Motifs Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        layout
      >
        <AnimatePresence>
          {filteredMotifs.map((motif, index) => (
            <motion.div
              key={motif.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.02 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 20px 40px rgba(0, 191, 166, 0.3)'
              }}
              className={`${themeClasses.card} rounded-xl overflow-hidden group`}
            >
              {/* Motif Preview */}
              <div className="h-48 bg-gradient-to-br from-genz-coral/20 to-genz-turquoise/20 relative overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-32 h-32 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Palette className="w-16 h-16 text-white/70" />
                  </div>
                </div>
                
                {/* Popularity Badge */}
                <div className="absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-bold bg-genz-gradient text-white flex items-center space-x-1">
                  <Star className="w-3 h-3" />
                  <span>{motif.popularityScore}</span>
                </div>

                {/* Complexity Badge */}
                <div className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-sm text-white flex items-center space-x-1">
                  <div className={`w-2 h-2 rounded-full ${getComplexityColor(motif.complexity)}`} />
                  <span>{motif.complexity}</span>
                </div>

                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-genz-gradient/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/canvas', { state: { motifId: motif.id } })}
                    className="px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm text-white font-semibold border border-white/30 hover:bg-white/30 flex items-center space-x-1"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Use</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm text-white font-semibold border border-white/30 hover:bg-white/30 flex items-center space-x-1"
                  >
                    <Heart className="w-4 h-4" />
                    <span>Save</span>
                  </motion.button>
                </div>
              </div>

              {/* Motif Info */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <h3 className={`font-bold text-lg ${themeClasses.heading} line-clamp-1`}>
                    {motif.name}
                  </h3>
                </div>

                <p className={`text-sm ${themeClasses.text} mb-3 line-clamp-2`}>
                  {motif.description}
                </p>

                {/* Motif Details */}
                <div className="space-y-2 mb-4">
                  <div className={`flex items-center justify-between text-sm ${themeClasses.text}`}>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3" />
                      <span>Origin:</span>
                    </div>
                    <span className="font-medium">{motif.origin}</span>
                  </div>
                  <div className={`flex items-center justify-between text-sm ${themeClasses.text}`}>
                    <div className="flex items-center space-x-1">
                      {getStyleIconByType(motif.style)}
                      <span>Style:</span>
                    </div>
                    <span className="font-medium">{motif.style}</span>
                  </div>
                  <div className={`flex items-center justify-between text-sm ${themeClasses.text}`}>
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>Creator:</span>
                    </div>
                    <span className="font-medium">{motif.creator}</span>
                  </div>
                </div>

                {/* Color Palette */}
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-xs font-medium">Colors:</span>
                  <div className="flex space-x-1">
                    {motif.colors.map((color, idx) => (
                      <div
                        key={idx}
                        className="w-4 h-4 rounded-full border border-gray-300 shadow-sm"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate('/canvas', { state: { motifId: motif.id } })}
                  className="w-full py-2 px-3 rounded-lg font-semibold text-sm transition-all duration-200 flex items-center justify-center space-x-1 bg-genz-gradient text-white hover:shadow-lg hover:shadow-genz-turquoise/30"
                >
                  <Palette className="w-4 h-4" />
                  <span>Use This Motif</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredMotifs.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12"
        >
          <div className="mb-4">
            <Palette className="w-16 h-16 mx-auto text-genz-coral" />
          </div>
          <h3 className={`text-xl font-semibold ${themeClasses.heading} mb-2`}>
            No motifs found!
          </h3>
          <p className={`${themeClasses.text} mb-6`}>
            Try adjusting your search or filter criteria.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setSearchTerm('')
              setSelectedStyle('All')
              setSelectedRegion('All')
            }}
            className="px-8 py-3 rounded-xl font-bold flex items-center space-x-2 mx-auto bg-genz-gradient text-white shadow-lg hover:shadow-xl"
          >
            <Filter className="w-5 h-5" />
            <span>Clear Filters</span>
          </motion.button>
        </motion.div>
      )}
    </div>
  )
}

export default MotifLibrary
