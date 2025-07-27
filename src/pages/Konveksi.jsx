import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'
import { useNavigate } from 'react-router-dom'
import { 
  Factory, 
  MapPin, 
  Star, 
  Search, 
  Filter, 
  Sparkles, 
  Zap,
  Clock,
  Package,
  Users,
  Truck,
  Shield,
  Heart,
  Eye,
  Phone,
  Mail,
  Globe,
  Award,
  Calendar,
  TrendingUp,
  Building,
  CheckCircle
} from 'lucide-react'

const Konveksi = () => {
  const navigate = useNavigate()
  const { getThemeClasses } = useTheme()
  const themeClasses = getThemeClasses()

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('All')
  const [selectedSpecialty, setSelectedSpecialty] = useState('All')
  const [priceRange, setPriceRange] = useState('All')
  const [sortBy, setSortBy] = useState('rating')

  // Mock data untuk konveksi
  const konveksiList = [
    {
      id: 1,
      name: 'Batik Nusantara Workshop',
      location: 'Yogyakarta',
      specialty: 'Traditional Batik',
      rating: 4.9,
      priceRange: 'Premium',
      experience: '15 years',
      capacity: '100-500 units/month',
      leadTime: '2-3 weeks',
      services: ['Custom Design', 'Bulk Production', 'Quality Control'],
      description: 'Premium traditional batik producer with modern techniques',
      contact: {
        phone: '+62 274 123456',
        email: 'info@batiknusantara.com',
        website: 'www.batiknusantara.com'
      },
      image: '/api/placeholder/300/200',
      verified: true,
      popularityScore: 95
    },
    {
      id: 2,
      name: 'Modern Batik Factory',
      location: 'Jakarta',
      specialty: 'Modern Design',
      rating: 4.7,
      priceRange: 'Mid-range',
      experience: '8 years',
      capacity: '200-1000 units/month',
      leadTime: '1-2 weeks',
      services: ['Digital Printing', 'Fast Production', 'Design Consultation'],
      description: 'Contemporary batik designs with fast delivery',
      contact: {
        phone: '+62 21 987654',
        email: 'hello@modernbatik.id',
        website: 'www.modernbatik.id'
      },
      image: '/api/placeholder/300/200',
      verified: true,
      popularityScore: 88
    },
    {
      id: 3,
      name: 'Artisan Collective',
      location: 'Solo',
      specialty: 'Handmade',
      rating: 4.8,
      priceRange: 'Premium',
      experience: '20 years',
      capacity: '50-200 units/month',
      leadTime: '3-4 weeks',
      services: ['Hand-drawn Batik', 'Custom Patterns', 'Heritage Techniques'],
      description: 'Authentic handmade batik by master artisans',
      contact: {
        phone: '+62 271 456789',
        email: 'craft@artisancollective.com',
        website: 'www.artisancollective.com'
      },
      image: '/api/placeholder/300/200',
      verified: true,
      popularityScore: 92
    }
  ]

  const locations = ['All', 'Yogyakarta', 'Jakarta', 'Solo', 'Surabaya', 'Bandung']
  const specialties = ['All', 'Traditional Batik', 'Modern Design', 'Handmade', 'Digital Print']
  const priceRanges = ['All', 'Budget', 'Mid-range', 'Premium']

  const filteredKonveksi = konveksiList
    .filter(konveksi => 
      (selectedLocation === 'All' || konveksi.location === selectedLocation) &&
      (selectedSpecialty === 'All' || konveksi.specialty === selectedSpecialty) &&
      (priceRange === 'All' || konveksi.priceRange === priceRange) &&
      (searchTerm === '' || konveksi.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       konveksi.location.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'rating': return b.rating - a.rating
        case 'name': return a.name.localeCompare(b.name)
        case 'location': return a.location.localeCompare(b.location)
        case 'popularity': return b.popularityScore - a.popularityScore
        default: return 0
      }
    })

  const getPriceRangeColor = (range) => {
    switch (range) {
      case 'Budget': return 'text-green-500 bg-green-100'
      case 'Mid-range': return 'text-yellow-500 bg-yellow-100'
      case 'Premium': return 'text-purple-500 bg-purple-100'
      default: return 'text-gray-500 bg-gray-100'
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
            <Factory className="w-8 h-8" />
            <span>Konveksi Partners</span>
            <Sparkles className="w-8 h-8" />
          </motion.h1>
          <motion.p 
            className="text-white/90 text-lg flex items-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span>Find trusted batik production partners for your projects!</span>
            <Zap className="w-5 h-5" />
          </motion.p>
        </div>
        
        <motion.div 
          className="absolute top-4 right-4 opacity-30"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Factory className="w-16 h-16 text-white" />
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
            <span>Search Partners</span>
          </label>
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name or location..."
              className="w-full px-4 py-3 rounded-lg border transition-all duration-200 border-genz-turquoise/30 focus:border-genz-turquoise focus:ring-2 focus:ring-genz-turquoise/20"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Filter Controls */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className={`block text-sm font-medium ${themeClasses.text} mb-2 flex items-center space-x-1`}>
              <MapPin className="w-4 h-4" />
              <span>Location</span>
            </label>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border transition-all duration-200 border-genz-turquoise/30 focus:border-genz-turquoise focus:ring-2 focus:ring-genz-turquoise/20"
            >
              {locations.map(location => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className={`block text-sm font-medium ${themeClasses.text} mb-2 flex items-center space-x-1`}>
              <Building className="w-4 h-4" />
              <span>Specialty</span>
            </label>
            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border transition-all duration-200 border-genz-turquoise/30 focus:border-genz-turquoise focus:ring-2 focus:ring-genz-turquoise/20"
            >
              {specialties.map(specialty => (
                <option key={specialty} value={specialty}>
                  {specialty}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className={`block text-sm font-medium ${themeClasses.text} mb-2 flex items-center space-x-1`}>
              <Package className="w-4 h-4" />
              <span>Price Range</span>
            </label>
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border transition-all duration-200 border-genz-turquoise/30 focus:border-genz-turquoise focus:ring-2 focus:ring-genz-turquoise/20"
            >
              {priceRanges.map(range => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
          </div>

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
              <option value="rating">Highest Rating</option>
              <option value="popularity">Most Popular</option>
              <option value="name">Name A-Z</option>
              <option value="location">Location</option>
            </select>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          {[
            { label: 'Total Partners', value: konveksiList.length, icon: Factory },
            { label: 'Verified', value: konveksiList.filter(k => k.verified).length, icon: CheckCircle },
            { label: 'Locations', value: locations.length - 1, icon: MapPin },
            { label: 'Avg Rating', value: '4.8', icon: Star }
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

      {/* Konveksi Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredKonveksi.map((konveksi, index) => (
          <motion.div
            key={konveksi.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: '0 20px 40px rgba(0, 191, 166, 0.3)'
            }}
            className={`${themeClasses.card} rounded-xl overflow-hidden`}
          >
            {/* Header */}
            <div className="p-6 border-b border-genz-turquoise/20">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className={`text-xl font-bold ${themeClasses.heading}`}>
                      {konveksi.name}
                    </h3>
                    {konveksi.verified && (
                      <div className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                        <CheckCircle className="w-3 h-3" />
                        <span>Verified</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{konveksi.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="font-semibold">{konveksi.rating}</span>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-bold ${getPriceRangeColor(konveksi.priceRange)}`}>
                      {konveksi.priceRange}
                    </div>
                  </div>
                  
                  <p className={`text-sm ${themeClasses.text} mb-3`}>
                    {konveksi.description}
                  </p>
                </div>
              </div>

              {/* Key Info Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                <div className="text-center p-3 rounded-lg bg-genz-turquoise/10">
                  <Users className="w-5 h-5 mx-auto text-genz-turquoise mb-1" />
                  <div className="text-xs font-semibold text-genz-turquoise">{konveksi.experience}</div>
                  <div className="text-xs text-gray-600">Experience</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-genz-coral/10">
                  <Package className="w-5 h-5 mx-auto text-genz-coral mb-1" />
                  <div className="text-xs font-semibold text-genz-coral">{konveksi.capacity}</div>
                  <div className="text-xs text-gray-600">Capacity</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-genz-purple/10">
                  <Clock className="w-5 h-5 mx-auto text-genz-purple mb-1" />
                  <div className="text-xs font-semibold text-genz-purple">{konveksi.leadTime}</div>
                  <div className="text-xs text-gray-600">Lead Time</div>
                </div>
              </div>

              {/* Specialty Badge */}
              <div className="mb-4">
                <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium bg-genz-gradient text-white">
                  <Building className="w-4 h-4" />
                  <span>{konveksi.specialty}</span>
                </span>
              </div>

              {/* Services */}
              <div className="mb-4">
                <div className="text-sm font-semibold text-gray-700 mb-2">Services:</div>
                <div className="flex flex-wrap gap-2">
                  {konveksi.services.map((service, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="p-6">
              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span>{konveksi.contact.phone}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span>{konveksi.contact.email}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Globe className="w-4 h-4" />
                  <span>{konveksi.contact.website}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 py-2 px-4 rounded-lg font-semibold text-sm transition-all duration-200 flex items-center justify-center space-x-1 bg-genz-gradient text-white hover:shadow-lg hover:shadow-genz-turquoise/30"
                >
                  <Phone className="w-4 h-4" />
                  <span>Contact</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="py-2 px-4 rounded-lg border border-genz-turquoise text-genz-turquoise hover:bg-genz-turquoise hover:text-white transition-all duration-200 flex items-center justify-center"
                >
                  <Heart className="w-4 h-4" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="py-2 px-4 rounded-lg border border-genz-coral text-genz-coral hover:bg-genz-coral hover:text-white transition-all duration-200 flex items-center justify-center"
                >
                  <Eye className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {filteredKonveksi.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12"
        >
          <div className="mb-4">
            <Factory className="w-16 h-16 mx-auto text-genz-coral" />
          </div>
          <h3 className={`text-xl font-semibold ${themeClasses.heading} mb-2`}>
            No partners found!
          </h3>
          <p className={`${themeClasses.text} mb-6`}>
            Try adjusting your search or filter criteria.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setSearchTerm('')
              setSelectedLocation('All')
              setSelectedSpecialty('All')
              setPriceRange('All')
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

export default Konveksi
