import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { smoothRotation } from "../utils/renderMovement/smoothRotation";
import { useFrame } from "@react-three/fiber";
import { rgbStringToColor } from "../utils/rgbStringObject";
import { MeshBasicMaterial } from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { anglesState } from "../store/features/anglesSlice";
import { renderVisualsState } from "../store/features/renderVisualsSlice";
import { keyControlState } from "../store/features/keyControlSlice";

type GLTFResult = GLTF & {
    nodes: {
        firstArm_1: THREE.Mesh;
        firstArm_2: THREE.Mesh;
        base_1: THREE.Mesh;
        base_2: THREE.Mesh;
        secondArm_1: THREE.Mesh;
        secondArm_2: THREE.Mesh;
        thirdArm_1: THREE.Mesh;
        thirdArm_2: THREE.Mesh;
    };
    materials: {
        firstArmMaterial: THREE.MeshPhysicalMaterial;
        firstArmEmissive: THREE.MeshStandardMaterial;
        baseMaterial: THREE.MeshPhysicalMaterial;
        baseEmissive: THREE.MeshStandardMaterial;
        secondArmMaterial: THREE.MeshPhysicalMaterial;
        secondArmEmissive: THREE.MeshStandardMaterial;
        thirdArmMaterial: THREE.MeshPhysicalMaterial;
        thirdArmEmissive: THREE.MeshStandardMaterial;
    };
};

interface robotArmProps {
    angles: anglesState;
    renderVisuals: renderVisualsState;
    keyControl: keyControlState;
    changeTarget: (target: number) => void;
    animationSpeed: number;
    dof?: number;
}

export const RobotArm = (props: JSX.IntrinsicElements["group"] & robotArmProps) => {
    const { nodes, materials } = useGLTF("/models/robotArm.glb") as unknown as GLTFResult;

    const angles = props.angles;
    const { referenceColors, baseColor, activeColor } = props.renderVisuals;
    const { isActive, whichActive } = props.keyControl;

    const group = useRef();
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

    materials.baseEmissive.emissive = rgbStringToColor(referenceColors.referenceColor1);
    materials.firstArmEmissive.emissive = rgbStringToColor(referenceColors.referenceColor2);
    materials.secondArmEmissive.emissive = rgbStringToColor(referenceColors.referenceColor3);
    materials.thirdArmEmissive.emissive = rgbStringToColor(referenceColors.referenceColor4);
    materials.firstArmMaterial.color = rgbStringToColor(referenceColors.referenceColor1);

    return (
        <group ref={group} {...props} dispose={null}>
            <group ref={base}>
                <group onClick={() => props.changeTarget(1)}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.base_1.geometry}
                        material={
                            isActive && whichActive === 1
                                ? new MeshBasicMaterial({ color: activeColor })
                                : new MeshBasicMaterial({ color: baseColor })
                        }
                    />
                    <mesh castShadow receiveShadow geometry={nodes.base_2.geometry} material={materials.baseEmissive} />
                </group>
                <group ref={firstArm} position={[0, 3.05, 0]}>
                    <group position={[0, 0, 0]} onClick={() => props.changeTarget(2)}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.firstArm_1.geometry}
                            material={
                                isActive && whichActive === 2
                                    ? new MeshBasicMaterial({ color: activeColor })
                                    : new MeshBasicMaterial({ color: baseColor })
                            }
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
                                material={
                                    isActive && whichActive === 3
                                        ? new MeshBasicMaterial({ color: activeColor })
                                        : new MeshBasicMaterial({ color: baseColor })
                                }
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.secondArm_2.geometry}
                                material={materials.secondArmEmissive}
                            />
                        </group>
                        {props.dof === 4 && (
                            <group position={[0, 10.33, 0]} ref={thirdArm} onClick={() => props.changeTarget(4)}>
                                <mesh
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.thirdArm_1.geometry}
                                    material={
                                        isActive && whichActive === 4
                                            ? new MeshBasicMaterial({ color: activeColor })
                                            : new MeshBasicMaterial({ color: baseColor })
                                    }
                                />
                                <mesh
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.thirdArm_2.geometry}
                                    material={materials.thirdArmEmissive}
                                />
                            </group>
                        )}
                    </group>
                </group>
            </group>
        </group>
    );
};

useGLTF.preload("/models/robotArm.glb");
