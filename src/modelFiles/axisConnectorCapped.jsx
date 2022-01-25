import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { MeshBasicMaterial } from 'three'
import { useFrame } from '@react-three/fiber'
import { smoothRotation } from '../utils/renderMovement/smoothRotation'

export const AxisConnectorCapped = (props) => {
  const group = useRef()
  const { nodes } = useGLTF('/models/axisConnectorCapped.glb')

  useFrame(()=> {smoothRotation(group, props.targetAngle,'y',props.animationSpeed)})

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[0, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={new MeshBasicMaterial({color: props.baseColor})}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={new MeshBasicMaterial({color: props.baseColor})}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/axisConnectorCapped.glb')