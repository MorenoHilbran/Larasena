import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'
import { myProjects } from '../data/mockData'
import {
  Plus,
  Filter,
  Search,
  Edit3,
  Copy,
  Trash2,
  Calendar,
  CheckCircle2,
  FileText,
  Rocket,
  Folder,
  Eye,
  Heart,
  Star,
  TrendingUp,
  Brush
} from 'lucide-react'

const MyProjects = () => {
  const navigate = useNavigate()
  const { getThemeClasses } = useTheme()
  const themeClasses = getThemeClasses()
  
  const [projects, setProjects] = useState(myProjects)
  const [filterStatus, setFilterStatus] = useState('All')
  const [sortBy, setSortBy] = useState('lastModified')

  const filteredProjects = projects
    .filter(project => filterStatus === 'All' || project.status === filterStatus)
    .sort((a, b) => {
      switch (sortBy) {
        case 'lastModified': return new Date(b.lastModified) - new Date(a.lastModified)
        case 'name': return a.name.localeCompare(b.name)
        case 'status': return a.status.localeCompare(b.status)
        default: return 0
      }
    })

  const handleEditProject = (project) => {
    navigate('/canvas', { state: { projectId: project.id } })
  }

  const handleDuplicateProject = (project) => {
    const newProject = {
      ...project,
      id: Date.now(),
      name: `${project.name} (Copy)`,
      status: 'draft',
      lastModified: new Date().toISOString().split('T')[0]
    }
    setProjects(prev => [newProject, ...prev])
  }

  const handleDeleteProject = (projectId) => {
    setProjects(prev => prev.filter(p => p.id !== projectId))
  }

  const getStatusIcon = (status) => {
    return status === 'completed' ? (
      <CheckCircle2 className="w-4 h-4 text-green-500" />
    ) : (
      <FileText className="w-4 h-4 text-orange-500" />
    )
  }

  const getStatusColor = (status) => {
    return status === 'completed' 
      ? 'bg-genz-turquoise text-white' 
      : 'bg-genz-coral text-white'
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('id-ID', { 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric' 
    })
  }

  return (
    <div className="space-y-6 font-poppins">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-2xl p-8"
        style={{
          background: 'linear-gradient(135deg, #8B5CF6 0%, #00D4FF 50%, #FF5E6C 100%)'
        }}
      >
        <div className="relative z-10 flex items-center justify-between">
          <div>
            <motion.h1 
              className="text-4xl font-bold text-white mb-2 flex items-center space-x-3"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Folder className="w-8 h-8" />
              <span>My Projects</span>
            </motion.h1>
            <motion.p 
              className="text-white/90 text-lg flex items-center space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span>Your creative batik journey in one place!</span>
              <Rocket className="w-5 h-5" />
            </motion.p>
          </div>
          
          {/* New Project Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/canvas')}
            className="px-6 py-3 rounded-xl font-bold text-lg shadow-lg transition-all duration-200 flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 hover:shadow-2xl"
            style={{
              filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))'
            }}
          >
            <Plus className="w-5 h-5" />
            <span>New Project</span>
          </motion.button>
        </div>
        
        <motion.div 
          className="absolute top-4 right-4 opacity-30"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Rocket className="w-16 h-16 text-white" />
        </motion.div>
      </motion.div>

      {/* Stats & Filters */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className={`${themeClasses.card} p-6 rounded-xl`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* Stats */}
          {[
            { label: 'Total Projects', value: projects.length, icon: Folder },
            { label: 'Completed', value: projects.filter(p => p.status === 'completed').length, icon: CheckCircle2 },
            { label: 'In Progress', value: projects.filter(p => p.status === 'draft').length, icon: FileText },
            { label: 'This Week', value: projects.filter(p => {
              const weekAgo = new Date()
              weekAgo.setDate(weekAgo.getDate() - 7)
              return new Date(p.lastModified) > weekAgo
            }).length, icon: TrendingUp }
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

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label className={`block text-sm font-medium ${themeClasses.text} mb-2 flex items-center space-x-1`}>
              <Filter className="w-4 h-4" />
              <span>Filter by Status</span>
            </label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border transition-all duration-200 border-genz-turquoise/30 focus:border-genz-turquoise focus:ring-2 focus:ring-genz-turquoise/20"
            >
              <option value="All">All Projects ✨</option>
              <option value="completed">Completed 🎉</option>
              <option value="draft">In Progress 🚧</option>
            </select>
          </div>
          
          <div className="flex-1">
            <label className={`block text-sm font-medium ${themeClasses.text} mb-2 flex items-center space-x-1`}>
              <TrendingUp className="w-4 h-4" />
              <span>Sort By</span>
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border transition-all duration-200 border-genz-turquoise/30 focus:border-genz-turquoise focus:ring-2 focus:ring-genz-turquoise/20"
            >
              <option value="lastModified">Latest First</option>
              <option value="name">Name A-Z</option>
              <option value="status">By Status</option>
            </select>
          </div>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        layout
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 20px 40px rgba(0, 191, 166, 0.3)'
              }}
              className={`${themeClasses.card} rounded-xl overflow-hidden group`}
            >
              {/* Project Thumbnail */}
              <div className="h-48 relative overflow-hidden bg-gradient-to-br from-genz-coral/20 to-genz-turquoise/20">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-32 h-32 rounded-lg flex items-center justify-center bg-white/20 backdrop-blur-sm">
                    <Folder className="w-16 h-16 text-white/70" />
                  </div>
                </div>
                
                {/* Status Badge */}
                <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 ${getStatusColor(project.status)}`}>
                  {getStatusIcon(project.status)}
                  <span>{project.status.toUpperCase()}</span>
                </div>

                {/* Overlay Actions */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center space-x-2 bg-genz-gradient/80 backdrop-blur-sm">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleEditProject(project)}
                    className="px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm text-white font-semibold border border-white/30 hover:bg-white/30 flex items-center space-x-1"
                  >
                    <Edit3 className="w-4 h-4" />
                    <span>Edit</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleDuplicateProject(project)}
                    className="px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm text-white font-semibold border border-white/30 hover:bg-white/30 flex items-center space-x-1"
                  >
                    <Copy className="w-4 h-4" />
                    <span>Copy</span>
                  </motion.button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <h3 className={`font-bold text-lg ${themeClasses.heading} line-clamp-1`}>
                    {project.name}
                  </h3>
                  <motion.button
                    whileHover={{ scale: 1.1, color: '#ef4444' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleDeleteProject(project.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </motion.button>
                </div>

                <p className={`text-sm ${themeClasses.text} mb-3 line-clamp-2`}>
                  {project.description}
                </p>

                {/* Project Details */}
                <div className="space-y-2 mb-4">
                  <div className={`flex items-center justify-between text-sm ${themeClasses.text}`}>
                    <div className="flex items-center space-x-1">
                      <Brush className="w-3 h-3" />
                      <span>Motif:</span>
                    </div>
                    <span className="font-medium">{project.motif}</span>
                  </div>
                  <div className={`flex items-center justify-between text-sm ${themeClasses.text}`}>
                    <div className="flex items-center space-x-1">
                      <Folder className="w-3 h-3" />
                      <span>Model:</span>
                    </div>
                    <span className="font-medium">{project.model}</span>
                  </div>
                  <div className={`flex items-center justify-between text-sm ${themeClasses.text}`}>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>Modified:</span>
                    </div>
                    <span className="font-medium">{formatDate(project.lastModified)}</span>
                  </div>
                </div>

                {/* Color Palette */}
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-xs font-medium">Colors:</span>
                  <div className="flex space-x-1">
                    {project.colors.map((color, idx) => (
                      <div
                        key={idx}
                        className="w-4 h-4 rounded-full border border-gray-300 shadow-sm"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleEditProject(project)}
                    className="flex-1 py-2 px-3 rounded-lg font-semibold text-sm transition-all duration-200 flex items-center justify-center space-x-1 bg-genz-gradient text-white hover:shadow-lg hover:shadow-genz-turquoise/30"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Continue</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12"
        >
          <div className="mb-4">
            <Folder className="w-16 h-16 mx-auto text-genz-coral" />
          </div>
          <h3 className={`text-xl font-semibold ${themeClasses.heading} mb-2`}>
            No projects yet!
          </h3>
          <p className={`${themeClasses.text} mb-6`}>
            Start your batik journey by creating your first project.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/canvas')}
            className="px-8 py-3 rounded-xl font-bold flex items-center space-x-2 mx-auto bg-genz-gradient text-white shadow-lg hover:shadow-xl"
          >
            <Plus className="w-5 h-5" />
            <span>Create First Project</span>
          </motion.button>
        </motion.div>
      )}
    </div>
  )
}

export default MyProjects
