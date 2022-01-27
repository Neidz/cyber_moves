import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { smoothRotation } from '../../utils/renderMovement/smoothRotation'
import { useFrame } from '@react-three/fiber'
import { rgbStringToObjectFraction } from '../../utils/rgbStringObject'

export const RobotArm = (props) => {
  const { nodes, materials } = useGLTF('/models/robotArm.glb')

  const angles = props.angles;
    const { referenceColors, baseColor, activeColor } = props.renderVisuals;
    const { isActive, whichActive } = props.keyControl;

    const group = useRef()
    const base = useRef();
    const firstArm = useRef();
    const secondArm = useRef();
    const thirdArm = useRef();

    useFrame(() => {
        smoothRotation(base, angles.angle1, "y", props.animationSpeed);
    });
    useFrame(() => {
        smoothRotation(firstArm, angles.angle2, "x", props.animationSpeed);
    });
    useFrame(() => {
      smoothRotation(secondArm, angles.angle3, "x", props.animationSpeed);
  });
  useFrame(() => {
    smoothRotation(thirdArm, angles.angle4, "x", props.animationSpeed);
});

  const baseMaterial = materials.normalMaterial
  baseMaterial.color = rgbStringToObjectFraction(baseColor)

  const refMat1 = materials.emissive;
  refMat1.emissive= rgbStringToObjectFraction(referenceColors.referenceColor1)
  const refMat2 = materials.emissive;;
  refMat2.emissive= rgbStringToObjectFraction(referenceColors.referenceColor2)
  const refMat3 = materials.emissive;;
  refMat3.emissive= rgbStringToObjectFraction(referenceColors.referenceColor3)
  const refMat4 = materials.emissive;;
  refMat4.emissive= rgbStringToObjectFraction(referenceColors.referenceColor4)
  const refMatActive = materials.emissive;;
  refMatActive.emissive= rgbStringToObjectFraction(activeColor)

  return (
    <group ref={group} {...props} dispose={null}>
      {/* base */}
      <group onClick={() => props.changeTarget(1)}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere004.geometry}
        material={baseMaterial}
        
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere004_1.geometry}
        material={isActive && whichActive === 1 ? refMatActive : refMat1}
      /></group>
      {/* first arm */}
      <group ref={firstArm} position={[0, 3.05, 0]}>
      <group position={[0, 0, 0]} onClick={() => props.changeTarget(2)}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere003.geometry}
          material={baseMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere003_1.geometry}
          material={isActive && whichActive === 2 ?  refMatActive : refMat2}
        />
      </group>
      
      {/* second arm */}
      <group ref={secondArm} position={[0, 10.35, 0]}>
      <group position={[0, 0, 0]} onClick={() => props.changeTarget(3)}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere005.geometry}
          material={baseMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere005_1.geometry}
          material={isActive && whichActive === 3 ?  refMatActive : refMat3}
        />
      </group>
      {/* third arm */}
      <group position={[0, 10.33, 0]} ref={thirdArm} onClick={() => props.changeTarget(4)}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere006.geometry}
          material={baseMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere006_1.geometry}
          material={isActive && whichActive === 4 ?  refMatActive: refMat4}
        />
      </group></group>
    </group></group>
  )
}

useGLTF.preload('/models/robotArm.glb')