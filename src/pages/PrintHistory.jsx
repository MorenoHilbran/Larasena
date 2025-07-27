import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FileText, 
  Filter, 
  Calendar, 
  Package, 
  Eye, 
  Truck,
  CheckCircle,
  Clock,
  XCircle,
  AlertCircle,
  MapPin,
  DollarSign,
  Factory
} from 'lucide-react'

const PrintHistory = () => {
  const [filterStatus, setFilterStatus] = useState('all')
  const [sortBy, setSortBy] = useState('orderDate')
  const [sortOrder, setSortOrder] = useState('desc')

  // Mock data langsung di dalam komponen untuk menghindari import error
  const printHistoryData = [
    {
      id: 1,
      designName: 'Parang Klasik Modern',
      thumbnail: '/shirt_baked.glb',
      konveksiId: 1,
      konveksiName: 'Batik Nusantara Workshop',
      orderDate: '2024-01-15',
      status: 'completed',
      deliveryEstimate: '2024-01-30',
      actualDelivery: '2024-01-28',
      quantity: 25,
      totalPrice: 1250000,
      trackingNumber: 'BNW2024001',
      orderNotes: 'Custom design dengan warna gold dominan'
    },
    {
      id: 2,
      designName: 'Mega Mendung Fusion',
      thumbnail: '/1_men_batik_shirt_short.glb',
      konveksiId: 2,
      konveksiName: 'Modern Batik Factory',
      orderDate: '2024-01-20',
      status: 'in-process',
      deliveryEstimate: '2024-02-05',
      actualDelivery: null,
      quantity: 50,
      totalPrice: 2000000,
      trackingNumber: 'MBF2024002',
      orderNotes: 'Produksi massal untuk event perusahaan'
    },
    {
      id: 3,
      designName: 'Kawung Contemporary',
      thumbnail: '/long_sleeve_batik_shirt_2.glb',
      konveksiId: 3,
      konveksiName: 'Artisan Collective',
      orderDate: '2024-01-25',
      status: 'delivered',
      deliveryEstimate: '2024-02-10',
      actualDelivery: '2024-02-08',
      quantity: 10,
      totalPrice: 800000,
      trackingNumber: 'AC2024003',
      orderNotes: 'Pesanan khusus dengan teknik hand-drawn'
    },
    {
      id: 4,
      designName: 'Truntum Minimalist',
      thumbnail: '/women_shirt_batik.glb',
      konveksiId: 1,
      konveksiName: 'Batik Nusantara Workshop',
      orderDate: '2024-02-01',
      status: 'cancelled',
      deliveryEstimate: '2024-02-15',
      actualDelivery: null,
      quantity: 30,
      totalPrice: 1500000,
      trackingNumber: 'BNW2024004',
      orderNotes: 'Dibatalkan karena perubahan spesifikasi'
    },
    {
      id: 5,
      designName: 'Sido Mukti Gold',
      thumbnail: '/long_sleeve_batik_shirt_2 (1).glb',
      konveksiId: 2,
      konveksiName: 'Modern Batik Factory',
      orderDate: '2024-02-05',
      status: 'pending',
      deliveryEstimate: '2024-02-20',
      actualDelivery: null,
      quantity: 15,
      totalPrice: 900000,
      trackingNumber: 'MBF2024005',
      orderNotes: 'Menunggu konfirmasi design final'
    }
  ]

  const orderStatusData = [
    { value: 'all', label: 'Semua Status', color: 'bg-gray-500' },
    { value: 'pending', label: 'Menunggu', color: 'bg-yellow-500' },
    { value: 'in-process', label: 'Dalam Proses', color: 'bg-blue-500' },
    { value: 'completed', label: 'Selesai', color: 'bg-green-500' },
    { value: 'delivered', label: 'Terkirim', color: 'bg-purple-500' },
    { value: 'cancelled', label: 'Dibatalkan', color: 'bg-red-500' }
  ]

  const konveksiPartnersData = [
    {
      id: 1,
      name: 'Batik Nusantara Workshop',
      location: 'Yogyakarta'
    },
    {
      id: 2,
      name: 'Modern Batik Factory',
      location: 'Jakarta'
    },
    {
      id: 3,
      name: 'Artisan Collective',
      location: 'Solo'
    }
  ]

  // Filter dan sort data dengan error handling
  const filteredHistory = printHistoryData
    .filter(order => filterStatus === 'all' || order.status === filterStatus)
    .sort((a, b) => {
      const direction = sortOrder === 'asc' ? 1 : -1
      
      try {
        switch (sortBy) {
          case 'orderDate':
            return direction * (new Date(a.orderDate) - new Date(b.orderDate))
          case 'deliveryEstimate':
            return direction * (new Date(a.deliveryEstimate) - new Date(b.deliveryEstimate))
          case 'designName':
            return direction * a.designName.localeCompare(b.designName)
          case 'totalPrice':
            return direction * (a.totalPrice - b.totalPrice)
          default:
            return 0
        }
      } catch (error) {
        console.error('Error sorting data:', error)
        return 0
      }
    })

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending': return <Clock className="w-4 h-4" />
      case 'in-process': return <Package className="w-4 h-4" />
      case 'completed': return <CheckCircle className="w-4 h-4" />
      case 'delivered': return <Truck className="w-4 h-4" />
      case 'cancelled': return <XCircle className="w-4 h-4" />
      default: return <AlertCircle className="w-4 h-4" />
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-gradient-to-r from-nusantara-amber to-nusantara-orange text-white'
      case 'in-process': return 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
      case 'completed': return 'bg-gradient-to-r from-green-500 to-green-600 text-white'
      case 'delivered': return 'bg-gradient-to-r from-purple-500 to-purple-600 text-white'
      case 'cancelled': return 'bg-gradient-to-r from-red-500 to-red-600 text-white'
      default: return 'bg-gray-500 text-white'
    }
  }

  const formatCurrency = (amount) => {
    try {
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
      }).format(amount)
    } catch (error) {
      return `Rp ${amount?.toLocaleString() || 0}`
    }
  }

  const formatDate = (dateString) => {
    try {
      return new Date(dateString).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
    } catch (error) {
      return dateString || 'Invalid Date'
    }
  }

  // Stats calculation dengan error handling
  const stats = {
    total: printHistoryData.length || 0,
    completed: printHistoryData.filter(order => order.status === 'completed' || order.status === 'delivered').length || 0,
    inProcess: printHistoryData.filter(order => order.status === 'in-process' || order.status === 'pending').length || 0,
    totalRevenue: printHistoryData
      .filter(order => order.status === 'completed' || order.status === 'delivered')
      .reduce((sum, order) => sum + (order.totalPrice || 0), 0) || 0
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-nusantara-brown via-nusantara-orange to-nusantara-amber p-8 rounded-xl shadow-lg"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2 flex items-center space-x-3 font-poppins">
              <FileText className="w-8 h-8" />
              <span>Riwayat Cetak</span>
            </h1>
            <p className="text-white/90 text-lg font-poppins">
              Pantau progress produksi batik Anda dengan partner konveksi terpercaya
            </p>
          </div>
          
          {/* Floating decoration */}
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "linear"
            }}
            className="hidden md:block"
          >
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Package className="w-12 h-12 text-white" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6"
      >
        <div className="bg-white p-6 rounded-xl shadow-lg border border-nusantara-amber/20">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-nusantara-brown to-nusantara-orange rounded-lg">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600 font-medium">Total Pesanan</p>
              <p className="text-2xl font-bold text-nusantara-brown">{stats.total}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-green-200">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600 font-medium">Selesai</p>
              <p className="text-2xl font-bold text-green-600">{stats.completed}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-200">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600 font-medium">Dalam Proses</p>
              <p className="text-2xl font-bold text-blue-600">{stats.inProcess}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-nusantara-amber/20">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-nusantara-orange to-nusantara-amber rounded-lg">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600 font-medium">Total Revenue</p>
              <p className="text-lg font-bold text-nusantara-brown">
                {formatCurrency(stats.totalRevenue)}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Filters & Controls */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white p-6 rounded-xl shadow-lg border border-nusantara-amber/20"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          {/* Status Filter */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-nusantara-brown" />
              <span className="font-medium text-nusantara-brown">Filter Status:</span>
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-nusantara-amber/30 rounded-lg focus:ring-2 focus:ring-nusantara-orange focus:border-transparent"
            >
              {orderStatusData.map(status => (
                <option key={status.value} value={status.value}>
                  {status.label}
                </option>
              ))}
            </select>
          </div>

          {/* Sort Controls */}
          <div className="flex items-center space-x-4">
            <span className="font-medium text-nusantara-brown">Urutkan:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-nusantara-amber/30 rounded-lg focus:ring-2 focus:ring-nusantara-orange focus:border-transparent"
            >
              <option value="orderDate">Tanggal Pesan</option>
              <option value="deliveryEstimate">Estimasi Kirim</option>
              <option value="designName">Nama Design</option>
              <option value="totalPrice">Total Harga</option>
            </select>
            <button
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              className="px-4 py-2 bg-gradient-to-r from-nusantara-brown to-nusantara-orange text-white rounded-lg hover:shadow-lg transition-all"
            >
              {sortOrder === 'asc' ? '↑' : '↓'}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Order History Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={filterStatus + sortBy + sortOrder}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {filteredHistory.map((order, index) => {
            const konveksi = konveksiPartnersData.find(k => k.id === order.konveksiId)
            
            return (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl shadow-lg border border-nusantara-amber/20 overflow-hidden"
              >
                {/* Card Header */}
                <div className="bg-gradient-to-r from-nusantara-brown/10 to-nusantara-orange/10 p-4 border-b border-nusantara-amber/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-nusantara-brown to-nusantara-orange rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold">#{order.id}</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-nusantara-brown">{order.designName}</h3>
                        <p className="text-sm text-gray-600">Order ID: {order.trackingNumber}</p>
                      </div>
                    </div>
                    
                    <motion.div
                      className={`px-3 py-1 rounded-full flex items-center space-x-2 ${getStatusColor(order.status)}`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {getStatusIcon(order.status)}
                      <span className="text-sm font-medium capitalize">
                        {orderStatusData.find(s => s.value === order.status)?.label || order.status}
                      </span>
                    </motion.div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {/* Order Details */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-nusantara-brown" />
                        <div>
                          <p className="text-xs text-gray-500">Tanggal Pesan</p>
                          <p className="text-sm font-medium">{formatDate(order.orderDate)}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Package className="w-4 h-4 text-nusantara-brown" />
                        <div>
                          <p className="text-xs text-gray-500">Jumlah</p>
                          <p className="text-sm font-medium">{order.quantity} pcs</p>
                        </div>
                      </div>
                    </div>

                    {/* Delivery Info */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Truck className="w-4 h-4 text-nusantara-brown" />
                        <div>
                          <p className="text-xs text-gray-500">Estimasi Kirim</p>
                          <p className="text-sm font-medium">{formatDate(order.deliveryEstimate)}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-4 h-4 text-nusantara-brown" />
                        <div>
                          <p className="text-xs text-gray-500">Total</p>
                          <p className="text-sm font-medium">{formatCurrency(order.totalPrice)}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Konveksi Info */}
                  <div className="bg-nusantara-amber/5 p-3 rounded-lg mb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Factory className="w-4 h-4 text-nusantara-brown" />
                        <div>
                          <p className="text-xs text-gray-500">Partner Konveksi</p>
                          <p className="font-medium text-nusantara-brown">{order.konveksiName}</p>
                        </div>
                      </div>
                      
                      {konveksi && (
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-3 h-3 text-gray-500" />
                          <span className="text-xs text-gray-500">{konveksi.location}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Order Notes */}
                  {order.orderNotes && (
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 mb-1">Catatan Pesanan</p>
                      <p className="text-sm text-gray-700 italic">{order.orderNotes}</p>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-gradient-to-r from-nusantara-brown to-nusantara-orange text-white py-2 px-4 rounded-lg font-medium flex items-center justify-center space-x-2 hover:shadow-lg transition-all"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Detail</span>
                    </motion.button>
                    
                    {(order.status === 'in-process' || order.status === 'completed') && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-white border border-nusantara-orange text-nusantara-brown py-2 px-4 rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-nusantara-orange/5 transition-all"
                      >
                        <Truck className="w-4 h-4" />
                        <span>Track</span>
                      </motion.button>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </AnimatePresence>

      {/* Empty State */}
      {filteredHistory.length === 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <div className="w-24 h-24 bg-gradient-to-r from-nusantara-brown to-nusantara-orange rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="w-12 h-12 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-nusantara-brown mb-2">
            Belum Ada Riwayat Cetak
          </h3>
          <p className="text-gray-600 mb-6">
            Mulai mencetak design batik Anda dengan partner konveksi terpercaya
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-nusantara-brown to-nusantara-orange text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all"
          >
            Mulai Mencetak
          </motion.button>
        </motion.div>
      )}
    </div>
  )
}

export default PrintHistory