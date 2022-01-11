import {  useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { MeshBasicMaterial } from 'three'
import { useFrame } from '@react-three/fiber'
import { smoothRotation } from '../utils/smoothRotation'

export const SimpleAxis = (props) => {
  const group = useRef()
  const { nodes } = useGLTF('/models/simpleAxis.glb')

  useFrame(()=> {smoothRotation(group, props.targetAngle)})


  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={new MeshBasicMaterial({color: props.baseColor})}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001_1.geometry}
        material={new MeshBasicMaterial({color: props.referenceColor})}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={new MeshBasicMaterial({color: props.referenceColor})}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002_1.geometry}
        material={new MeshBasicMaterial({color: props.baseColor})}
      />
    </group>
  )
}

useGLTF.preload('/models/simpleAxis.glb')