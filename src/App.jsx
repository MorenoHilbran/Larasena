import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'
import Layout from './components/Layout'
import Gallery from './pages/Gallery'
import Konveksi from './pages/Konveksi'
import Canvas3D from './pages/Canvas3D'
import NotFound from './pages/NotFound'

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-nusantara-cream">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Navigate to="/gallery" replace />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="konveksi" element={<Konveksi />} />
              <Route path="canvas" element={<Canvas3D />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
  )
}

export default App
