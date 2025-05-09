import React from 'react'

import {easing }  from 'maath'
import { useSnapshot } from 'valtio'
import { useFrame } from '@react-three/fiber'
import {Decal , useGLTF , useTexture} from '@react-three/drei'

import circle from '../assets/Circle.png'
import square from '../assets/Square.png'
import star from '../assets/Star.png'
import heart from '../assets/Heart.png'

import * as THREE from 'three'

import state from '../store'

const Shirt = () => {

  const masks = {
    circle: useTexture(circle),
    square: useTexture(square),
    star: useTexture(star),
    heart: useTexture(heart)
  };

  const snap = useSnapshot(state)
  const { nodes, materials } = useGLTF('/shirt_baked.glb')
  const logoTexture = useTexture(snap.logoDecal)
  const fullTexture = useTexture(snap.fullDecal)  

  const alphaMask = masks[snap.selectedMask];
  
  useFrame((state, delta) => 
    easing.dampC(materials.lambert1.color , snap.color ,0.25 , delta)
  )
  const stateString = JSON.stringify(snap)

  const material = new THREE.MeshStandardMaterial({
    map: logoTexture,
    alphaMap: alphaMask,
    transparent: true,
  });

  return (
    <group key ={stateString}>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose = {null}  
        >
          {snap.isFullTexture && (
            <Decal position={[0,0,0]}
            rotation={[0,0,0]}
              scale={1}
              map={fullTexture}
             />
          )}

          {snap.isLogoTexture && (
            <Decal position={[0,0.04,0.15]}
            rotation={[0,0,0]}
            scale={0.15}
            map={logoTexture}
            mapAnisotropy={16}
            depthTest={false}
            depthWrite={true}
            material = {material}
            />
          )}

        </mesh>
    </group>
  )
}

export default Shirt