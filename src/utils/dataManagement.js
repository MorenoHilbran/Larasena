// User analytics and design tracking
export const analytics = {
  // Track user interactions
  trackEvent: (category, action, label = '', value = 0) => {
    const event = {
      category,
      action,
      label,
      value,
      timestamp: new Date().toISOString(),
      sessionId: getSessionId(),
      userId: getUserId()
    }
    
    // Store locally for now (could be sent to analytics service)
    const events = JSON.parse(localStorage.getItem('larasena-analytics') || '[]')
    events.push(event)
    localStorage.setItem('larasena-analytics', JSON.stringify(events.slice(-1000))) // Keep last 1000 events
    
    console.log('Analytics Event:', event)
  },

  // Design-specific tracking
  trackDesignAction: (action, designData = {}) => {
    analytics.trackEvent('Design', action, '', 1)
    
    // Store design session data
    const designSession = {
      action,
      designData,
      timestamp: new Date().toISOString()
    }
    
    const sessions = JSON.parse(localStorage.getItem('larasena-design-sessions') || '[]')
    sessions.push(designSession)
    localStorage.setItem('larasena-design-sessions', JSON.stringify(sessions.slice(-100)))
  },

  // Performance tracking
  trackPerformance: (metric, value, context = {}) => {
    const perfData = {
      metric,
      value,
      context,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      viewport: { width: window.innerWidth, height: window.innerHeight }
    }
    
    const perfEvents = JSON.parse(localStorage.getItem('larasena-performance') || '[]')
    perfEvents.push(perfData)
    localStorage.setItem('larasena-performance', JSON.stringify(perfEvents.slice(-500)))
  },

  // Get analytics summary
  getSummary: () => {
    const events = JSON.parse(localStorage.getItem('larasena-analytics') || '[]')
    const designSessions = JSON.parse(localStorage.getItem('larasena-design-sessions') || '[]')
    const performance = JSON.parse(localStorage.getItem('larasena-performance') || '[]')
    
    return {
      totalEvents: events.length,
      designSessions: designSessions.length,
      performanceMetrics: performance.length,
      mostUsedFeatures: getMostUsedFeatures(events),
      averageSessionDuration: getAverageSessionDuration(events)
    }
  }
}

// Design version control system
export class DesignVersionControl {
  constructor() {
    this.versions = JSON.parse(localStorage.getItem('larasena-design-versions') || '[]')
    this.currentDesignId = null
  }

  // Save current design state as new version
  saveVersion(designState, comment = '') {
    const version = {
      id: generateId(),
      designId: this.currentDesignId || generateId(),
      version: this.getNextVersionNumber(),
      state: JSON.parse(JSON.stringify(designState)), // Deep clone
      comment,
      timestamp: new Date().toISOString(),
      author: getUserId()
    }

    if (!this.currentDesignId) {
      this.currentDesignId = version.designId
    }

    this.versions.push(version)
    this.saveToStorage()
    
    analytics.trackDesignAction('version_saved', { versionNumber: version.version })
    
    return version
  }

  // Get all versions for current design
  getVersions(designId = this.currentDesignId) {
    return this.versions.filter(v => v.designId === designId)
  }

  // Restore specific version
  restoreVersion(versionId) {
    const version = this.versions.find(v => v.id === versionId)
    if (version) {
      analytics.trackDesignAction('version_restored', { versionId })
      return version.state
    }
    return null
  }

  // Compare two versions
  compareVersions(versionId1, versionId2) {
    const v1 = this.versions.find(v => v.id === versionId1)
    const v2 = this.versions.find(v => v.id === versionId2)
    
    if (!v1 || !v2) return null
    
    return {
      version1: v1,
      version2: v2,
      differences: findStateDifferences(v1.state, v2.state)
    }
  }

  getNextVersionNumber() {
    const designVersions = this.getVersions()
    return designVersions.length + 1
  }

  saveToStorage() {
    localStorage.setItem('larasena-design-versions', JSON.stringify(this.versions))
  }
}

// Design export system
export const exportSystem = {
  // Export design as JSON
  exportAsJSON: (designState, metadata = {}) => {
    const exportData = {
      version: '1.0',
      exportDate: new Date().toISOString(),
      metadata: {
        name: metadata.name || 'Untitled Design',
        description: metadata.description || '',
        tags: metadata.tags || [],
        ...metadata
      },
      designState,
      larasenaVersion: '1.0.0'
    }
    
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' })
    downloadFile(blob, `${exportData.metadata.name}.larasena`)
    
    analytics.trackDesignAction('exported_json')
  },

  // Export design config for production
  exportForProduction: (designState, konveksiPartner = null) => {
    const productionData = {
      designId: generateId(),
      colors: extractColors(designState),
      patterns: extractPatterns(designState),
      modelType: designState.selectedModel || 'shirt_baked.glb',
      specifications: {
        fabric: 'Cotton',
        sizes: ['S', 'M', 'L', 'XL'],
        printMethod: 'Digital Print'
      },
      konveksiPartner,
      exportDate: new Date().toISOString()
    }
    
    const blob = new Blob([JSON.stringify(productionData, null, 2)], { type: 'application/json' })
    downloadFile(blob, `production-specs-${productionData.designId}.json`)
    
    analytics.trackDesignAction('exported_production')
  },

  // Import design from file
  importDesign: async (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = (e) => {
        try {
          const importData = JSON.parse(e.target.result)
          if (importData.version && importData.designState) {
            analytics.trackDesignAction('imported_design')
            resolve(importData.designState)
          } else {
            reject(new Error('Invalid file format'))
          }
        } catch (error) {
          reject(error)
        }
      }
      reader.readAsText(file)
    })
  }
}

// Helper functions
const getSessionId = () => {
  let sessionId = sessionStorage.getItem('larasena-session-id')
  if (!sessionId) {
    sessionId = generateId()
    sessionStorage.setItem('larasena-session-id', sessionId)
  }
  return sessionId
}

const getUserId = () => {
  let userId = localStorage.getItem('larasena-user-id')
  if (!userId) {
    userId = generateId()
    localStorage.setItem('larasena-user-id', userId)
  }
  return userId
}

const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}

const getMostUsedFeatures = (events) => {
  const featureCount = {}
  events.forEach(event => {
    const key = `${event.category}-${event.action}`
    featureCount[key] = (featureCount[key] || 0) + 1
  })
  
  return Object.entries(featureCount)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 5)
    .map(([feature, count]) => ({ feature, count }))
}

const getAverageSessionDuration = (events) => {
  // Simple implementation - could be more sophisticated
  if (events.length < 2) return 0
  
  const firstEvent = new Date(events[0].timestamp)
  const lastEvent = new Date(events[events.length - 1].timestamp)
  return Math.round((lastEvent - firstEvent) / 1000 / 60) // minutes
}

const findStateDifferences = (state1, state2) => {
  const differences = []
  
  for (const key in state1) {
    if (state1[key] !== state2[key]) {
      differences.push({
        property: key,
        oldValue: state1[key],
        newValue: state2[key]
      })
    }
  }
  
  return differences
}

const extractColors = (designState) => {
  return [designState.color || '#D8B08C']
}

const extractPatterns = (designState) => {
  return {
    logoDecal: designState.logoDecal,
    fullDecal: designState.fullDecal,
    selectedMask: designState.selectedMask
  }
}

const downloadFile = (blob, filename) => {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
