import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { smoothRotation } from '../utils/renderMovement/smoothRotation'
import { MeshBasicMaterial } from 'three'

export const AxisConnector = (props) => {
  const group = useRef()
  const { nodes } = useGLTF('/models/axisConnector.glb')

  useFrame(()=> {smoothRotation(group, props.targetAngle)})

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.axisConnector.geometry}
        material={new MeshBasicMaterial({color: props.baseColor})}
        position={[6, 0, 0]}
        scale="1"
      />
    </group>
  )
}

useGLTF.preload('/models/axisConnector.glb')
