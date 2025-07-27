import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-nusantara-cream flex items-center justify-center p-6">
          <div className="bg-white rounded-lg shadow-lg border border-nusantara-warm-beige p-8 max-w-md w-full text-center">
            <div className="text-6xl mb-4">🎨</div>
            <h2 className="text-2xl font-bold text-nusantara-deep-red mb-4">
              Oops! Something went wrong
            </h2>
            <p className="text-nusantara-soft-gold mb-6">
              We encountered an error while loading the 3D canvas. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-nusantara-deep-red text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
