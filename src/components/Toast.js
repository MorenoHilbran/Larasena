import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Toast = ({ message, type = 'info', duration = 3000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onClose, 300) // Wait for animation to complete
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  const toastStyles = {
    info: 'bg-blue-500 text-white',
    success: 'bg-green-500 text-white',
    warning: 'bg-yellow-500 text-black',
    error: 'bg-red-500 text-white',
    batik: 'bg-nusantara-deep-red text-nusantara-cream'
  }

  const icons = {
    info: 'ℹ️',
    success: '✅',
    warning: '⚠️',
    error: '❌',
    batik: '🎨'
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          className={`
            fixed top-4 right-4 z-50 px-4 py-3 rounded-lg shadow-lg border
            ${toastStyles[type]} max-w-sm flex items-center space-x-3
          `}
        >
          <span className="text-xl">{icons[type]}</span>
          <span className="flex-1 font-medium">{message}</span>
          <button
            onClick={() => setIsVisible(false)}
            className="text-lg opacity-70 hover:opacity-100 transition-opacity"
          >
            ×
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Toast hook for easy usage
export const useToast = () => {
  const [toasts, setToasts] = useState([])

  const addToast = (message, type = 'info', duration = 3000) => {
    const id = Date.now()
    const newToast = { id, message, type, duration }
    
    setToasts(prev => [...prev, newToast])
  }

  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  }

  const ToastContainer = () => (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map(toast => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          duration={toast.duration}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  )

  return {
    addToast,
    ToastContainer,
    showSuccess: (message) => addToast(message, 'success'),
    showError: (message) => addToast(message, 'error'),
    showWarning: (message) => addToast(message, 'warning'),
    showInfo: (message) => addToast(message, 'info'),
    showBatik: (message) => addToast(message, 'batik')
  }
}

export default Toast
