import React, { Suspense, useMemo } from 'react'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'
import { useFrame } from '@react-three/fiber'
import { Decal, useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import state from '../store'
import { getValidModel } from '../utils/modelValidator'

// Import assets
import circle from '../assets/Circle.png'
import square from '../assets/Square.png'
import star from '../assets/Star.png'
import heart from '../assets/Heart.png'

const Shirt = ({ modelPath = 'shirt_baked.glb' }) => {
  const snap = useSnapshot(state)
  
  // Validate model path
  const validModelPath = getValidModel(modelPath)

  // Use useMemo to prevent unnecessary re-renders
  const masks = useMemo(() => ({
    circle: circle,
    square: square,
    star: star,
    heart: heart
  }), [])

  try {
    // Load model with error handling - use validated path
    const { nodes, materials } = useGLTF(`/${validModelPath}`)
    
    // Load textures with fallbacks
    const logoTexture = useTexture(snap.logoDecal || circle)
    const fullTexture = useTexture(snap.fullDecal || circle)
    const alphaMask = useTexture(masks[snap.selectedMask] || circle)
    
    // Ensure materials exist
    if (!materials || !materials.lambert1) {
      console.warn('Material lambert1 not found, using default material')
      return null
    }

    // Get the first available mesh geometry
    const nodeNames = Object.keys(nodes)
    let geometry = null
    
    // Try to find a mesh with geometry
    for (const nodeName of nodeNames) {
      if (nodes[nodeName]?.geometry) {
        geometry = nodes[nodeName].geometry
        break
      }
    }

    if (!geometry) {
      console.warn('No valid geometry found in model:', validModelPath)
      return null
    }

    useFrame((state, delta) => {
      if (materials.lambert1?.color) {
        easing.dampC(materials.lambert1.color, snap.color, 0.25, delta)
      }
    })

    const stateString = JSON.stringify(snap)

    const material = new THREE.MeshStandardMaterial({
      map: logoTexture,
      alphaMap: alphaMask,
      transparent: true,
    })

    return (
      <group key={stateString}>
        <mesh
          castShadow
          geometry={geometry}
          material={materials.lambert1}
          material-roughness={1}
          dispose={null}
        >
          {snap.isFullTexture && (
            <Decal 
              position={[0, 0, 0]}
              rotation={[0, 0, 0]}
              scale={1}
              map={fullTexture}
            />
          )}

          {snap.isLogoTexture && (
            <Decal 
              position={[0, 0.04, 0.15]}
              rotation={[0, 0, 0]}
              scale={0.15}
              map={logoTexture}
              mapAnisotropy={16}
              depthTest={false}
              depthWrite={true}
              material={material}
            />
          )}
        </mesh>
      </group>
    )
  } catch (error) {
    console.error('Error loading 3D model:', error)
    return null
  }
}

// Preload all models to prevent loading issues
useGLTF.preload('/shirt_baked.glb')
useGLTF.preload('/1_men_batik_shirt_short.glb')
useGLTF.preload('/long_sleeve_batik_shirt_2.glb')
useGLTF.preload('/women_shirt_batik.glb')

export default Shirt