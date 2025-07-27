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
        <div className="min-h-screen bg-genz-secondary flex items-center justify-center p-6">
          <div className="bg-white rounded-lg shadow-lg border border-genz-turquoise/20 p-8 max-w-md w-full text-center">
            <div className="text-6xl mb-4">🎨</div>
            <h2 className="text-2xl font-bold text-genz-primary mb-4">
              Oops! Something went wrong
            </h2>
            <p className="text-genz-turquoise mb-6">
              We encountered an error while loading the app. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-genz-gradient text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-200"
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
