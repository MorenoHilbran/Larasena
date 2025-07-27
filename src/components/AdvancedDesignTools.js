import React, { useState, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { useSnapshot } from 'valtio'
import state from '../store'

// Color harmony generator
const colorHarmonies = {
  complementary: (baseColor) => {
    // Simple complementary color calculation
    const r = parseInt(baseColor.slice(1, 3), 16)
    const g = parseInt(baseColor.slice(3, 5), 16)
    const b = parseInt(baseColor.slice(5, 7), 16)
    
    const compR = (255 - r).toString(16).padStart(2, '0')
    const compG = (255 - g).toString(16).padStart(2, '0')
    const compB = (255 - b).toString(16).padStart(2, '0')
    
    return [`#${compR}${compG}${compB}`]
  },
  
  triadic: (baseColor) => {
    // Simple triadic color calculation
    const hsl = hexToHsl(baseColor)
    const color1 = hslToHex((hsl.h + 120) % 360, hsl.s, hsl.l)
    const color2 = hslToHex((hsl.h + 240) % 360, hsl.s, hsl.l)
    return [color1, color2]
  },
  
  analogous: (baseColor) => {
    const hsl = hexToHsl(baseColor)
    const color1 = hslToHex((hsl.h + 30) % 360, hsl.s, hsl.l)
    const color2 = hslToHex((hsl.h - 30 + 360) % 360, hsl.s, hsl.l)
    return [color1, color2]
  }
}

// Helper functions for color conversion
const hexToHsl = (hex) => {
  const r = parseInt(hex.slice(1, 3), 16) / 255
  const g = parseInt(hex.slice(3, 5), 16) / 255
  const b = parseInt(hex.slice(5, 7), 16) / 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h, s, l = (max + min) / 2

  if (max === min) {
    h = s = 0
  } else {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break
      case g: h = (b - r) / d + 2; break
      case b: h = (r - g) / d + 4; break
    }
    h /= 6
  }

  return { h: h * 360, s: s * 100, l: l * 100 }
}

const hslToHex = (h, s, l) => {
  l /= 100
  const a = s * Math.min(l, 1 - l) / 100
  const f = n => {
    const k = (n + h / 30) % 12
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
    return Math.round(255 * color).toString(16).padStart(2, '0')
  }
  return `#${f(0)}${f(8)}${f(4)}`
}

// Advanced Color Picker Component
const AdvancedColorPicker = () => {
  const snap = useSnapshot(state)
  const [harmonyType, setHarmonyType] = useState('complementary')
  const [savedPalettes, setSavedPalettes] = useState([])
  
  const currentHarmony = colorHarmonies[harmonyType](snap.color)

  const savePalette = () => {
    const palette = {
      id: Date.now(),
      name: `Palette ${savedPalettes.length + 1}`,
      colors: [snap.color, ...currentHarmony],
      created: new Date().toISOString()
    }
    setSavedPalettes(prev => [...prev, palette])
  }

  const loadPalette = (palette) => {
    state.color = palette.colors[0]
  }

  return (
    <div className="absolute left-full ml-3 bg-white rounded-lg shadow-lg border border-nusantara-warm-beige p-4 w-80">
      <h3 className="font-semibold text-nusantara-deep-red mb-3">Advanced Color Tools</h3>
      
      {/* Current Color */}
      <div className="mb-4">
        <div className="flex items-center space-x-2 mb-2">
          <div 
            className="w-8 h-8 rounded border border-gray-300"
            style={{ backgroundColor: snap.color }}
          />
          <span className="font-mono text-sm">{snap.color}</span>
        </div>
      </div>

      {/* Color Harmony */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Color Harmony</label>
        <select
          value={harmonyType}
          onChange={(e) => setHarmonyType(e.target.value)}
          className="w-full border rounded px-3 py-1 text-sm"
        >
          <option value="complementary">Complementary</option>
          <option value="triadic">Triadic</option>
          <option value="analogous">Analogous</option>
        </select>
        
        <div className="flex space-x-1 mt-2">
          {currentHarmony.map((color, index) => (
            <button
              key={index}
              className="w-8 h-8 rounded border border-gray-300 hover:scale-110 transition-transform"
              style={{ backgroundColor: color }}
              onClick={() => state.color = color}
              title={color}
            />
          ))}
        </div>
      </div>

      {/* Batik-inspired Colors */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Batik Classics</label>
        <div className="grid grid-cols-6 gap-1">
          {[
            '#D8B08C', '#B33F00', '#F5F0E1', '#A67B5B', '#8B4513', '#E6D3B0',
            '#654321', '#CD853F', '#DEB887', '#F4A460', '#D2691E', '#BC8F8F'
          ].map((color, index) => (
            <button
              key={index}
              className="w-6 h-6 rounded border border-gray-300 hover:scale-110 transition-transform"
              style={{ backgroundColor: color }}
              onClick={() => state.color = color}
              title={color}
            />
          ))}
        </div>
      </div>

      {/* Save/Load Palettes */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="text-sm font-medium">Saved Palettes</label>
          <button
            onClick={savePalette}
            className="text-xs bg-nusantara-deep-red text-white px-2 py-1 rounded hover:bg-opacity-90"
          >
            Save Current
          </button>
        </div>
        
        <div className="space-y-1 max-h-32 overflow-y-auto">
          {savedPalettes.map((palette) => (
            <div
              key={palette.id}
              className="flex items-center space-x-2 p-1 rounded hover:bg-gray-50 cursor-pointer"
              onClick={() => loadPalette(palette)}
            >
              <div className="flex space-x-1">
                {palette.colors.slice(0, 4).map((color, idx) => (
                  <div
                    key={idx}
                    className="w-3 h-3 rounded-sm border border-gray-300"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-600 flex-1">{palette.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Pattern Generator Component
const PatternGenerator = () => {
  const [patternType, setPatternType] = useState('geometric')
  const [density, setDensity] = useState(50)
  const [complexity, setComplexity] = useState(3)
  
  const generatePattern = () => {
    // Mock pattern generation
    console.log(`Generating ${patternType} pattern with density ${density} and complexity ${complexity}`)
    // In a real implementation, this would generate SVG patterns or textures
  }

  return (
    <div className="absolute left-full ml-3 bg-white rounded-lg shadow-lg border border-nusantara-warm-beige p-4 w-64">
      <h3 className="font-semibold text-nusantara-deep-red mb-3">Pattern Generator</h3>
      
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium mb-1">Pattern Type</label>
          <select
            value={patternType}
            onChange={(e) => setPatternType(e.target.value)}
            className="w-full border rounded px-3 py-1 text-sm"
          >
            <option value="geometric">Geometric</option>
            <option value="floral">Floral</option>
            <option value="traditional">Traditional Batik</option>
            <option value="modern">Modern Abstract</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Density: {density}%</label>
          <input
            type="range"
            min="10"
            max="90"
            value={density}
            onChange={(e) => setDensity(e.target.value)}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Complexity: {complexity}</label>
          <input
            type="range"
            min="1"
            max="5"
            value={complexity}
            onChange={(e) => setComplexity(e.target.value)}
            className="w-full"
          />
        </div>

        <button
          onClick={generatePattern}
          className="w-full bg-nusantara-deep-red text-white py-2 px-3 rounded text-sm hover:bg-opacity-90 transition-colors"
        >
          Generate Pattern
        </button>
      </div>
    </div>
  )
}

export { AdvancedColorPicker, PatternGenerator }
