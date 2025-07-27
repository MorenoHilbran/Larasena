import React from 'react'

const LoadingSpinner = ({ message = 'Loading...' }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="relative">
        <div className="w-12 h-12 border-4 border-nusantara-warm-beige border-t-nusantara-deep-red rounded-full animate-spin"></div>
      </div>
      <p className="mt-4 text-nusantara-soft-gold font-medium">{message}</p>
    </div>
  )
}

export default LoadingSpinner
