import React, { createContext, useContext, useReducer, useEffect } from 'react'

// Settings context for user preferences
const SettingsContext = createContext()

const defaultSettings = {
  // Display preferences
  theme: 'nusantara', // nusantara, light, dark
  language: 'id', // id, en
  
  // 3D rendering preferences
  renderQuality: 'medium', // low, medium, high
  autoRotate: false,
  showGrid: false,
  showAxes: false,
  
  // UI preferences
  showTooltips: true,
  animations: true,
  soundEffects: false,
  
  // Canvas preferences
  backgroundType: 'gradient', // solid, gradient, environment
  cameraControls: 'orbit', // orbit, free, locked
  
  // Accessibility
  highContrast: false,
  largeText: false,
  reduceMotion: false,
  
  // User workflow
  autoSave: true,
  showTutorial: true,
  defaultModel: 'shirt_baked.glb'
}

const settingsReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_SETTING':
      return {
        ...state,
        [action.key]: action.value
      }
    case 'BULK_UPDATE':
      return {
        ...state,
        ...action.settings
      }
    case 'RESET_TO_DEFAULTS':
      return { ...defaultSettings }
    case 'LOAD_SETTINGS':
      return {
        ...defaultSettings,
        ...action.settings
      }
    default:
      return state
  }
}

export const SettingsProvider = ({ children }) => {
  const [settings, dispatch] = useReducer(settingsReducer, defaultSettings)

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('larasena-settings')
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings)
        dispatch({ type: 'LOAD_SETTINGS', settings: parsed })
      } catch (error) {
        console.error('Failed to load settings:', error)
      }
    }
  }, [])

  // Save settings to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('larasena-settings', JSON.stringify(settings))
  }, [settings])

  const updateSetting = (key, value) => {
    dispatch({ type: 'UPDATE_SETTING', key, value })
  }

  const bulkUpdate = (newSettings) => {
    dispatch({ type: 'BULK_UPDATE', settings: newSettings })
  }

  const resetSettings = () => {
    dispatch({ type: 'RESET_TO_DEFAULTS' })
  }

  const value = {
    settings,
    updateSetting,
    bulkUpdate,
    resetSettings
  }

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  )
}

export const useSettings = () => {
  const context = useContext(SettingsContext)
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider')
  }
  return context
}

// Settings panel component
export const SettingsPanel = ({ isOpen, onClose }) => {
  const { settings, updateSetting, resetSettings } = useSettings()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="sticky top-0 bg-nusantara-deep-red text-white p-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Settings</h2>
          <button
            onClick={onClose}
            className="text-2xl hover:bg-white hover:bg-opacity-20 rounded-full w-8 h-8 flex items-center justify-center"
          >
            ×
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Display Settings */}
          <div>
            <h3 className="font-semibold text-nusantara-deep-red mb-3">Display</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label>Theme</label>
                <select
                  value={settings.theme}
                  onChange={(e) => updateSetting('theme', e.target.value)}
                  className="border rounded px-3 py-1"
                >
                  <option value="nusantara">Nusantara</option>
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </div>
              
              <div className="flex items-center justify-between">
                <label>Language</label>
                <select
                  value={settings.language}
                  onChange={(e) => updateSetting('language', e.target.value)}
                  className="border rounded px-3 py-1"
                >
                  <option value="id">Bahasa Indonesia</option>
                  <option value="en">English</option>
                </select>
              </div>
            </div>
          </div>

          {/* 3D Rendering Settings */}
          <div>
            <h3 className="font-semibold text-nusantara-deep-red mb-3">3D Rendering</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label>Render Quality</label>
                <select
                  value={settings.renderQuality}
                  onChange={(e) => updateSetting('renderQuality', e.target.value)}
                  className="border rounded px-3 py-1"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>

              <div className="flex items-center justify-between">
                <label>Auto Rotate</label>
                <input
                  type="checkbox"
                  checked={settings.autoRotate}
                  onChange={(e) => updateSetting('autoRotate', e.target.checked)}
                  className="w-4 h-4"
                />
              </div>
            </div>
          </div>

          {/* Accessibility Settings */}
          <div>
            <h3 className="font-semibold text-nusantara-deep-red mb-3">Accessibility</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label>High Contrast</label>
                <input
                  type="checkbox"
                  checked={settings.highContrast}
                  onChange={(e) => updateSetting('highContrast', e.target.checked)}
                  className="w-4 h-4"
                />
              </div>

              <div className="flex items-center justify-between">
                <label>Reduce Motion</label>
                <input
                  type="checkbox"
                  checked={settings.reduceMotion}
                  onChange={(e) => updateSetting('reduceMotion', e.target.checked)}
                  className="w-4 h-4"
                />
              </div>
            </div>
          </div>

          {/* Reset Button */}
          <div className="pt-4 border-t">
            <button
              onClick={resetSettings}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
            >
              Reset to Defaults
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
