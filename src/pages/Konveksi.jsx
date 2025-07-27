import React from 'react'
import { motion } from 'framer-motion'
import { konveksiPartners } from '../data/mockData'

const Konveksi = () => {
  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push('⭐')
    }
    if (hasHalfStar) {
      stars.push('⭐')
    }
    
    return stars.join('')
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-nusantara-deep-red font-inter">
          Konveksi Partners
        </h1>
        <p className="text-nusantara-soft-gold mt-2">
          Connect with trusted batik production partners across Indonesia
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow border border-nusantara-warm-beige">
          <div className="text-2xl font-bold text-nusantara-deep-red">{konveksiPartners.length}</div>
          <div className="text-sm text-nusantara-soft-gold">Total Partners</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow border border-nusantara-warm-beige">
          <div className="text-2xl font-bold text-nusantara-deep-red">4.7</div>
          <div className="text-sm text-nusantara-soft-gold">Average Rating</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow border border-nusantara-warm-beige">
          <div className="text-2xl font-bold text-nusantara-deep-red">25+</div>
          <div className="text-sm text-nusantara-soft-gold">Min Order (avg)</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow border border-nusantara-warm-beige">
          <div className="text-2xl font-bold text-nusantara-deep-red">7</div>
          <div className="text-sm text-nusantara-soft-gold">Cities</div>
        </div>
      </div>

      {/* Partners Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {konveksiPartners.map((partner, index) => (
          <motion.div
            key={partner.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg shadow-lg border border-nusantara-warm-beige overflow-hidden"
          >
            {/* Partner Header */}
            <div className="bg-gradient-to-r from-nusantara-light-brown to-nusantara-soft-gold p-4">
              <div className="flex items-center space-x-3">
                <div className="text-3xl">{partner.image}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white">{partner.name}</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-300">{renderStars(partner.rating)}</span>
                    <span className="text-nusantara-cream text-sm">{partner.rating}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Partner Details */}
            <div className="p-4 space-y-3">
              <div className="flex items-center text-sm text-nusantara-soft-gold">
                <span className="mr-1">📍</span>
                {partner.location}
              </div>

              <p className="text-sm text-gray-600 line-clamp-3">
                {partner.description}
              </p>

              {/* Specialties */}
              <div>
                <div className="text-xs font-semibold text-nusantara-deep-red mb-1">
                  Specialties:
                </div>
                <div className="flex flex-wrap gap-1">
                  {partner.specialties.map((specialty, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-nusantara-cream text-nusantara-deep-red px-2 py-1 rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Order Info */}
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-nusantara-soft-gold">Min Order:</span>
                  <span className="font-medium text-nusantara-deep-red">
                    {partner.minOrder} pieces
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-nusantara-soft-gold">Price Range:</span>
                  <span className="font-medium text-nusantara-deep-red">
                    {partner.priceRange}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-2 pt-3">
                <button className="flex-1 bg-nusantara-deep-red text-white py-2 px-3 rounded text-sm hover:bg-opacity-90 transition-colors">
                  Contact
                </button>
                <button className="flex-1 bg-nusantara-light-brown text-white py-2 px-3 rounded text-sm hover:bg-opacity-90 transition-colors">
                  View Portfolio
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Konveksi
