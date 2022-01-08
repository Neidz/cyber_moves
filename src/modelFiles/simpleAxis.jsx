import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'


export const SimpleAxis = (props) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/simpleAxis.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={nodes.Cylinder001.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001_1.geometry}
        material={nodes.Cylinder001_1.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={nodes.Cylinder002.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002_1.geometry}
        material={nodes.Cylinder002_1.material}
      />
    </group>
  )
}

useGLTF.preload('/models/simpleAxis.glb')