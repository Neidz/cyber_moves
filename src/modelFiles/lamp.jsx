import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { MeshBasicMaterial } from "three";

export const Lamp = (props) => {
  const group = useRef()
  const { nodes } = useGLTF('/models/lamp.glb')


  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={new MeshBasicMaterial({color: props.lightColor})}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder_1.geometry}
        material={new MeshBasicMaterial({color: props.baseColor})}
      />
    </group>
  )
}

useGLTF.preload('/models/lamp.glb')
