import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { rgbStringToObjectFraction } from '../utils/rgbStringObject'

export const  Plane = (props) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/plane.glb')
  materials.plane.emissive = rgbStringToObjectFraction(props.planeColor)
  
  return (
    <group ref={group} {...props} dispose={null} scale = "5">
      <mesh castShadow receiveShadow geometry={nodes.plane.geometry} material={materials.plane} />
    </group>
  )
}

useGLTF.preload('/models/plane.glb')