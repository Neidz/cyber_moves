import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { MeshBasicMaterial } from "three";

export const Plane = (props) => {
  const group = useRef()
  const { nodes} = useGLTF('/models/plane.glb')

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.plane.geometry} material={new MeshBasicMaterial({color: props.planeColor})} />
    </group>
  )
}

useGLTF.preload('/models/plane.glb')