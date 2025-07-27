import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'

// Import existing components
import Canvas from '../canvas'
import { ColorPicker, FilePicker, ShapePicker, CustomButton, Tab, ErrorBoundary } from '../components'
import state from '../store'
import { downloadCanvasToImage, reader } from '../config/helpers'
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants'
import { fadeAnimation, slideAnimation } from '../config/motion'
import { modelOptions, aiMotifs } from '../data/mockData'
import { getValidModel, modelMetadata } from '../utils/modelValidator'

const Canvas3D = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const snap = useSnapshot(state)
  
  const [file, setFile] = useState('')
  const [activeEditorTab, setActiveEditorTab] = useState('')
  const [activeFilterTab, setActiveFilterTab] = useState({ logoShirt: true, stylishShirt: false })
  const [selectedModel, setSelectedModel] = useState('shirt_baked.glb')

  // Validate and set model
  const handleModelChange = (modelId) => {
    const validModel = getValidModel(modelId)
    setSelectedModel(validModel)
    if (validModel !== modelId) {
      console.warn(`Model ${modelId} not found, using fallback: ${validModel}`)
    }
  }

  React.useEffect(() => {
    // Initialize the 3D canvas state
    state.intro = false
  }, [])

  const generateTabContent = () => {
    switch (activeEditorTab) {
      case "colorpicker":
        return <ColorPicker />
      case "filepicker":
        return <FilePicker file={file} setFile={setFile} readFile={readFile} />
      case "shapepicker":
        return <ShapePicker />
      default:
        return null
    }
  }

  const handleActiveFilterTab = (tabName) => {
    switch (tabName) {
      case "logoShirt":
        state.isLogoTexture = !activeFilterTab[tabName]
        break
      case "stylishShirt":
        state.isFullTexture = !activeFilterTab[tabName]
        break
      default:
        state.isLogoTexture = true
        state.isFullTexture = false
    }

    setActiveFilterTab((prevState) => ({
      ...prevState,
      [tabName]: !prevState[tabName]
    }))
  }

  const handleDecals = (type, result) => {
    const decalType = DecalTypes[type]
    state[decalType.stateProperty] = result

    if (!activeFilterTab[decalType.filterTab]) {
      handleActiveFilterTab(decalType.filterTab)
    }
  }

  const readFile = (type) => {
    reader(file).then((result) => {
      handleDecals(type, result)
      setActiveEditorTab('')
    })
  }

  const generateMotif = () => {
    // Mock AI motif generation using centralized data
    const randomMotif = aiMotifs[Math.floor(Math.random() * aiMotifs.length)]
    
    // Simulate file reading
    fetch(randomMotif)
      .then(res => res.blob())
      .then(blob => {
        const reader = new FileReader()
        reader.onload = () => {
          handleDecals('logo', reader.result)
        }
        reader.readAsDataURL(blob)
      })
      .catch(() => {
        // Fallback to a default pattern
        state.logoDecal = '/src/assets/Circle.png'
      })
  }

  return (
    <div className="relative h-full bg-nusantara-cream">
      {/* Header */}
      <div className="bg-white border-b border-nusantara-warm-beige p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate('/gallery')}
            className="bg-nusantara-light-brown text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors flex items-center space-x-2"
          >
            <span>←</span>
            <span>Back to Gallery</span>
          </button>
          
          <div>
            <h1 className="text-xl font-bold text-nusantara-deep-red">
              3D Batik Designer
            </h1>
            <p className="text-sm text-nusantara-soft-gold">
              Create and customize your batik pattern
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={generateMotif}
            className="bg-gradient-to-r from-nusantara-deep-red to-nusantara-soft-gold text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity flex items-center space-x-2"
          >
            <span>✨</span>
            <span>Generate AI Motif</span>
          </motion.button>
          
          <CustomButton
            type='filled'
            title='Download'
            handleClick={() => downloadCanvasToImage('png')}
            customStyles='bg-nusantara-soft-gold hover:bg-nusantara-light-brown text-white px-4 py-2 rounded-lg transition-colors'
          />
        </div>
      </div>

      {/* Model Selection */}
      <div className="bg-white border-b border-nusantara-warm-beige p-4">
        <h3 className="text-sm font-semibold text-nusantara-deep-red mb-3">
          Select Product Type:
        </h3>
        <div className="flex space-x-2">
          {modelOptions.map((model) => {
            const metadata = modelMetadata[model.id]
            return (
              <button
                key={model.id}
                onClick={() => handleModelChange(model.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  selectedModel === model.id
                    ? 'bg-nusantara-deep-red text-white'
                    : 'bg-nusantara-cream text-nusantara-deep-red hover:bg-nusantara-warm-beige'
                }`}
                title={`${model.name} - Load time: ${metadata?.loadTime || 'Unknown'}`}
              >
                <span>{model.icon}</span>
                <div className="text-left">
                  <div className="text-sm font-medium">{model.name}</div>
                  {metadata && (
                    <div className="text-xs opacity-75">
                      {metadata.loadTime} load
                    </div>
                  )}
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Main Canvas Area */}
      <div className="relative flex-1" style={{ height: 'calc(100vh - 200px)' }}>
        {/* 3D Canvas with Error Boundary */}
        <ErrorBoundary>
          <Canvas selectedModel={selectedModel} />
        </ErrorBoundary>

        {/* Left Editor Panel */}
        <AnimatePresence>
          <motion.div 
            className='absolute top-4 left-4 z-10' 
            key='customize' 
            {...slideAnimation('left')}
          >
            <div className='bg-white rounded-lg shadow-lg border border-nusantara-warm-beige overflow-hidden'>
              <div className='bg-nusantara-light-brown p-3'>
                <h3 className='text-white font-semibold text-sm'>Design Tools</h3>
              </div>
              
              <div className='p-2'>
                <div className='editortabs-container tabs'>
                  {EditorTabs.map((tab) => (
                    <Tab 
                      key={tab.name} 
                      tab={tab} 
                      handleClick={() => {
                        setActiveEditorTab((prev) => {
                          if (prev === tab.name) {
                            return ''
                          }
                          return tab.name
                        })
                      }} 
                    />
                  ))}
                </div>
                
                {generateTabContent()}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Filter Panel */}
        <motion.div 
          className='absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10' 
          {...slideAnimation('up')}
        >
          <div className='bg-white rounded-lg shadow-lg border border-nusantara-warm-beige p-4'>
            <div className='flex space-x-2'>
              {FilterTabs.map((tab) => (
                <Tab 
                  key={tab.name} 
                  tab={tab} 
                  isFilterTab 
                  isActiveTab={activeFilterTab[tab.name]} 
                  handleClick={() => handleActiveFilterTab(tab.name)} 
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Instructions Panel */}
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-white rounded-lg shadow-lg border border-nusantara-warm-beige p-4 max-w-sm">
            <h3 className="font-semibold text-nusantara-deep-red mb-2">
              How to Use:
            </h3>
            <ul className="text-sm text-nusantara-soft-gold space-y-1 mb-3">
              <li>• Choose a product type above</li>
              <li>• Use tools on the left to customize</li>
              <li>• Click "Generate AI Motif" for inspiration</li>
              <li>• Apply colors and patterns</li>
              <li>• Download your design when ready</li>
            </ul>
            
            {selectedModel && modelMetadata[selectedModel] && (
              <div className="border-t border-nusantara-warm-beige pt-3">
                <div className="text-xs text-gray-500">
                  <strong>Current Model:</strong> {modelMetadata[selectedModel].name}<br/>
                  <strong>Load Time:</strong> {modelMetadata[selectedModel].loadTime}<br/>
                  <strong>Complexity:</strong> {modelMetadata[selectedModel].complexity}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Canvas3D
