import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export const Plane = (props) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/plane.glb')
  materials.plane.emissive = props.planeColor

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.plane.geometry} material={materials.plane} />
    </group>
  )
}

useGLTF.preload('/models/plane.glb')