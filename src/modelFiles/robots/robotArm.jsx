import  { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { smoothRotation } from '../../utils/renderMovement/smoothRotation';
import { useFrame } from '@react-three/fiber';
import { rgbStringToObjectFraction } from '../../utils/rgbStringObject';
import { MeshBasicMaterial } from 'three';

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

materials.baseEmissive.emissive = rgbStringToObjectFraction(referenceColors.referenceColor1)
materials.firstArmEmissive.emissive = rgbStringToObjectFraction(referenceColors.referenceColor2)
materials.secondArmEmissive.emissive = rgbStringToObjectFraction(referenceColors.referenceColor3)
materials.thirdArmEmissive.emissive = rgbStringToObjectFraction(referenceColors.referenceColor4)
materials.firstArmMaterial.color = rgbStringToObjectFraction(referenceColors.referenceColor1)

  return (
    <group ref={group} {...props} dispose={null}>
        <group ref={base}>
        <group onClick={() => props.changeTarget(1)}>
        <mesh
        castShadow
        receiveShadow
        geometry={nodes.base_1.geometry}
        material={isActive && whichActive === 1 ? new MeshBasicMaterial({color: activeColor}):new MeshBasicMaterial({color: baseColor})}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.base_2.geometry}
        material={materials.baseEmissive}
      /></group>
      <group ref={firstArm} position={[0, 3.05, 0]}>
      <group position={[0, 0, 0]} onClick={() => props.changeTarget(2)}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.firstArm_1.geometry}
          material={isActive && whichActive === 2 ? new MeshBasicMaterial({color: activeColor}):new MeshBasicMaterial({color: baseColor})}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.firstArm_2.geometry}
          material={materials.firstArmEmissive}
        />
      </group>
      
      <group ref={secondArm} position={[0, 10.35, 0]}>
      <group position={[0, 0, 0]} onClick={() => props.changeTarget(3)}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.secondArm_1.geometry}
          material={isActive && whichActive === 3 ? new MeshBasicMaterial({color: activeColor}):new MeshBasicMaterial({color: baseColor})}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.secondArm_2.geometry}
          material={materials.secondArmEmissive}
        />
      </group>
      {props.dof === 4 && <group position={[0, 10.33, 0]} ref={thirdArm} onClick={() => props.changeTarget(4)}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.thirdArm_1.geometry}
          material={isActive && whichActive === 4 ? new MeshBasicMaterial({color: activeColor}):new MeshBasicMaterial({color: baseColor})}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.thirdArm_2.geometry}
          material={materials.thirdArmEmissive}
        /></group>}
      </group></group>
    </group></group>
  )
}

useGLTF.preload('/models/robotArm.glb')
