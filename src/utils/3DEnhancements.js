import React, { useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows, Stage } from '@react-three/drei'
import * as THREE from 'three'

// Enhanced 3D studio environment
const StudioEnvironment = ({ 
  preset = 'studio', 
  background = false, 
  environmentIntensity = 1,
  backgroundBlurriness = 0.5 
}) => {
  return (
    <>
      <Environment 
        preset={preset}
        background={background}
        backgroundBlurriness={backgroundBlurriness}
        environmentIntensity={environmentIntensity}
      />
      <ContactShadows
        position={[0, -1.4, 0]}
        opacity={0.4}
        scale={10}
        blur={2.5}
        far={4.5}
        color="#B33F00"
      />
    </>
  )
}

// 360-degree view controller
export const Use360View = () => {
  const [isRotating, setIsRotating] = useState(false)
  const [rotationSpeed, setRotationSpeed] = useState(0.01)
  const groupRef = useRef()

  useFrame(() => {
    if (isRotating && groupRef.current) {
      groupRef.current.rotation.y += rotationSpeed
    }
  })

  const controls = {
    start360: () => setIsRotating(true),
    stop360: () => setIsRotating(false),
    setSpeed: (speed) => setRotationSpeed(speed),
    reset: () => {
      setIsRotating(false)
      if (groupRef.current) {
        groupRef.current.rotation.set(0, 0, 0)
      }
    }
  }

  return { groupRef, controls, isRotating }
}

// Camera animation presets
export const cameraAnimations = {
  frontView: { position: [0, 0, 5], target: [0, 0, 0] },
  backView: { position: [0, 0, -5], target: [0, 0, 0] },
  sideView: { position: [5, 0, 0], target: [0, 0, 0] },
  topView: { position: [0, 5, 0], target: [0, 0, 0] },
  isometric: { position: [3, 3, 3], target: [0, 0, 0] }
}

// Enhanced lighting setup
const ProfessionalLighting = () => {
  return (
    <>
      {/* Key light */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      
      {/* Fill light */}
      <directionalLight
        position={[-3, 3, 2]}
        intensity={0.5}
        color="#F5F0E1"
      />
      
      {/* Rim light */}
      <directionalLight
        position={[0, 2, -5]}
        intensity={0.3}
        color="#D8B08C"
      />
      
      {/* Ambient light */}
      <ambientLight intensity={0.3} color="#F5F0E1" />
    </>
  )
}

// Quality settings for different devices
export const qualityPresets = {
  low: {
    shadowMapSize: 512,
    antialias: false,
    pixelRatio: 1,
    environmentIntensity: 0.5
  },
  medium: {
    shadowMapSize: 1024,
    antialias: true,
    pixelRatio: Math.min(window.devicePixelRatio, 1.5),
    environmentIntensity: 0.8
  },
  high: {
    shadowMapSize: 2048,
    antialias: true,
    pixelRatio: Math.min(window.devicePixelRatio, 2),
    environmentIntensity: 1
  }
}

export { StudioEnvironment, ProfessionalLighting }
