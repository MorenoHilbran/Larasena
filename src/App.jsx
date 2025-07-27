import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import ErrorBoundary from './components/ErrorBoundary'
import Layout from './components/Layout'
import Gallery from './pages/Gallery'
import Konveksi from './pages/Konveksi'
import Canvas3D from './pages/Canvas3D'
import MotifLibrary from './pages/MotifLibrary'
import MyProjects from './pages/MyProjects'
import NotFound from './pages/NotFound'
import PrintHistory from './pages/PrintHistory'

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Router>
          <div className="min-h-screen bg-genz-secondary font-poppins">
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Navigate to="/gallery" replace />} />
                <Route path="gallery" element={<Gallery />} />
                <Route path="konveksi" element={<Konveksi />} />
                <Route path="canvas" element={<Canvas3D />} />
                <Route path="motifs" element={<MotifLibrary />} />
                <Route path="projects" element={<MyProjects />} />
                <Route path="print-history" element={<PrintHistory />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App
