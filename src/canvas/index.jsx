import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Center, Html, useProgress } from '@react-three/drei'
import Shirt from './Shirt'
import CameraRig from './CameraRig'
import Backdrop from './Backdrop'

// Loading component
function Loader() {
  const { progress } = useProgress()
  return (
    <Html center>
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 border-4 border-nusantara-warm-beige border-t-nusantara-deep-red rounded-full animate-spin"></div>
        <div className="text-nusantara-deep-red font-medium">
          Loading 3D Model... {Math.round(progress)}%
        </div>
      </div>
    </Html>
  )
}

// Error Boundary for Canvas
function CanvasFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-nusantara-cream to-nusantara-light-brown">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg border border-nusantara-warm-beige max-w-md">
        <div className="text-6xl mb-4">👔</div>
        <h3 className="text-xl font-semibold text-nusantara-deep-red mb-2">
          3D Preview Unavailable
        </h3>
        <p className="text-nusantara-soft-gold text-sm mb-4">
          The 3D model is loading or temporarily unavailable. You can still use the design tools on the left.
        </p>
        <div className="text-xs text-gray-500">
          Try selecting a different shirt model or refresh the page.
        </div>
      </div>
    </div>
  )
}

const CanvasModel = ({ selectedModel = 'shirt_baked.glb' }) => {
  return (
    <div className="w-full h-full">
      <Canvas 
        shadows 
        camera={{ position: [0, 0, 0], fov: 25 }} 
        gl={{ preserveDrawingBuffer: true }} 
        className="w-full max-w-full h-full transition-all ease-in"
        onCreated={(state) => {
          // Optimize performance
          state.gl.setClearColor('#F5F0E1') // Nusantara cream background
        }}
        fallback={<CanvasFallback />}
      >
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <Environment preset="city" />
          <CameraRig>
            <Backdrop />
            <Center>
              <Shirt modelPath={selectedModel} />
            </Center>
          </CameraRig>
        </Suspense>
      </Canvas>
    </div>
  )
}

export default CanvasModel