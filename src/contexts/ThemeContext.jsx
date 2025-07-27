import React, { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  // Always use Gen-Z mode
  const isGenZMode = true

  useEffect(() => {
    // Set Gen-Z theme CSS custom properties
    const root = document.documentElement
    root.style.setProperty('--primary-color', '#B33F00')
    root.style.setProperty('--secondary-color', '#00BFA6')
    root.style.setProperty('--accent-color', '#FF5E6C')
    root.style.setProperty('--bg-color', '#F5F0E1')
    root.style.setProperty('--text-color', '#1F2937')
  }, [])

  const getThemeClasses = () => {
    // Always return Gen-Z theme classes
    return {
      primary: 'bg-genz-primary text-white',
      secondary: 'bg-genz-turquoise text-white',
      accent: 'bg-genz-coral text-white',
      background: 'bg-genz-secondary',
      card: 'bg-white shadow-lg hover:shadow-xl border border-genz-turquoise/20',
      button: 'bg-genz-gradient hover:scale-105 transform transition-all duration-200',
      text: 'text-gray-800',
      heading: 'text-genz-primary font-bold',
      gradient: 'bg-genz-gradient'
    }
  }

  const value = {
    isGenZMode,
    getThemeClasses
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
