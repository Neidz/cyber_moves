import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export const Lamp = (props) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/lamp.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials.lightMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder_1.geometry}
        material={materials.defaultMaterial}
      />
    </group>
  )
}

useGLTF.preload('/models/lamp.glb')
