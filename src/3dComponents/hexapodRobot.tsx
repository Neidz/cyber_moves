import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { anglesState } from "../store/features/anglesSlice";
import { renderVisualsState } from "../store/features/renderVisualsSlice";
import { keyControlState } from "../store/features/keyControlSlice";
import { smoothRotation } from "../utils/renderMovement/smoothRotation";
import { useFrame } from "@react-three/fiber";
import { toAngle } from "../utils/toAngle";
import { MeshBasicMaterial } from "three";
import { rgbStringToColor } from "../utils/rgbStringObject";

type GLTFResult = GLTF & {
    nodes: {
        base: THREE.Mesh;
        leg3base_1: THREE.Mesh;
        leg3base_2: THREE.Mesh;
        leg3middle_1: THREE.Mesh;
        leg3middle_2: THREE.Mesh;
        leg3tip_1: THREE.Mesh;
        leg3tip_2: THREE.Mesh;
        leg2base_1: THREE.Mesh;
        leg2base_2: THREE.Mesh;
        leg2middle_1: THREE.Mesh;
        leg2middle_2: THREE.Mesh;
        leg2tip_1: THREE.Mesh;
        leg2tip_2: THREE.Mesh;
        leg1base_1: THREE.Mesh;
        leg1base_2: THREE.Mesh;
        leg1middle_1: THREE.Mesh;
        leg1middle_2: THREE.Mesh;
        leg1tip_1: THREE.Mesh;
        leg1tip_2: THREE.Mesh;
        leg5base_1: THREE.Mesh;
        leg5base_2: THREE.Mesh;
        leg5middle_1: THREE.Mesh;
        leg5middle_2: THREE.Mesh;
        leg5tip_1: THREE.Mesh;
        leg5tip_2: THREE.Mesh;
        leg6base_1: THREE.Mesh;
        leg6base_2: THREE.Mesh;
        leg6middle_1: THREE.Mesh;
        leg6middle_2: THREE.Mesh;
        leg6tip_1: THREE.Mesh;
        leg6tip_2: THREE.Mesh;
        leg4base_1: THREE.Mesh;
        leg4base_2: THREE.Mesh;
        leg4middle_1: THREE.Mesh;
        leg4middle_2: THREE.Mesh;
        leg4tip_1: THREE.Mesh;
        leg4tip_2: THREE.Mesh;
    };
    materials: {
        baseColor: THREE.MeshStandardMaterial;
        leg3baseEmissive: THREE.MeshStandardMaterial;
        leg3middleEmissive: THREE.MeshStandardMaterial;
        leg3tipEmissive: THREE.MeshStandardMaterial;
        leg2baseEmissive: THREE.MeshStandardMaterial;
        leg2middleEmissive: THREE.MeshStandardMaterial;
        leg2tipEmissive: THREE.MeshStandardMaterial;
        leg1baseEmissive: THREE.MeshStandardMaterial;
        leg1middleEmissive: THREE.MeshStandardMaterial;
        leg1tipEmissive: THREE.MeshStandardMaterial;
        leg5baseEmissive: THREE.MeshStandardMaterial;
        leg5middleEmissive: THREE.MeshStandardMaterial;
        leg5tipEmissive: THREE.MeshStandardMaterial;
        leg6baseEmissive: THREE.MeshStandardMaterial;
        leg6middleEmissive: THREE.MeshStandardMaterial;
        leg6tipEmissive: THREE.MeshStandardMaterial;
        leg4baseEmissive: THREE.MeshStandardMaterial;
        leg4middleEmissive: THREE.MeshStandardMaterial;
        leg4tipEmissive: THREE.MeshStandardMaterial;
    };
};

interface hexapodRobotProps {
    angles: anglesState;
    renderVisuals: renderVisualsState;
    keyControl: keyControlState;
    changeTarget: (target: number) => void;
    animationSpeed: number;
}

export const HexapodRobot = (props: JSX.IntrinsicElements["group"] & hexapodRobotProps) => {
    const { nodes, materials } = useGLTF("/models/hexapod.glb") as unknown as GLTFResult;

    const angles = props.angles;
    const { referenceColors, baseColor, activeColor } = props.renderVisuals;
    const { isActive, whichActive } = props.keyControl;

    const group = useRef<THREE.Group>();
    const leg1base = useRef<THREE.Group>();
    const leg1middle = useRef<THREE.Group>();
    const leg1tip = useRef<THREE.Group>();
    const leg2base = useRef<THREE.Group>();
    const leg2middle = useRef<THREE.Group>();
    const leg2tip = useRef<THREE.Group>();
    const leg3base = useRef<THREE.Group>();
    const leg3middle = useRef<THREE.Group>();
    const leg3tip = useRef<THREE.Group>();
    const leg4base = useRef<THREE.Group>();
    const leg4middle = useRef<THREE.Group>();
    const leg4tip = useRef<THREE.Group>();
    const leg5base = useRef<THREE.Group>();
    const leg5middle = useRef<THREE.Group>();
    const leg5tip = useRef<THREE.Group>();
    const leg6base = useRef<THREE.Group>();
    const leg6middle = useRef<THREE.Group>();
    const leg6tip = useRef<THREE.Group>();

    // smoothRotation causes parts of the robot to slowly travel to choosen position
    // few models have added offset on top of choosen angle because rotation to that model was not apllied in blender
    // I do this that way because it allows me to have predictable rotation in z axis (in blender y axis) even tho the models are rotated
    // by different angles in y axis (z axis in blender), legs in the middle are located directly on axis x so they don't need offset
    useFrame(() => {
        smoothRotation(leg1base, angles.angle1 + toAngle(-2.36), "z", props.animationSpeed);
        smoothRotation(leg1middle, -angles.angle2, "z", props.animationSpeed);
        smoothRotation(leg1tip, -angles.angle3, "z", props.animationSpeed);

        smoothRotation(leg2base, angles.angle4 + toAngle(-Math.PI / 4), "z", props.animationSpeed);
        smoothRotation(leg2middle, -angles.angle5, "z", props.animationSpeed);
        smoothRotation(leg2tip, -angles.angle6, "z", props.animationSpeed);

        smoothRotation(leg3base, angles.angle7 + toAngle(Math.PI), "z", props.animationSpeed);
        smoothRotation(leg3middle, -angles.angle8, "z", props.animationSpeed);
        smoothRotation(leg3tip, -angles.angle9, "z", props.animationSpeed);

        smoothRotation(leg4base, angles.angle10, "z", props.animationSpeed);
        smoothRotation(leg4middle, -angles.angle11, "z", props.animationSpeed);
        smoothRotation(leg4tip, -angles.angle12, "z", props.animationSpeed);

        smoothRotation(leg5base, angles.angle13 + toAngle(2.36), "z", props.animationSpeed);
        smoothRotation(leg5middle, -angles.angle14, "z", props.animationSpeed);
        smoothRotation(leg5tip, -angles.angle15, "z", props.animationSpeed);

        smoothRotation(leg6base, angles.angle16 + toAngle(Math.PI / 4), "z", props.animationSpeed);
        smoothRotation(leg6middle, -angles.angle17, "z", props.animationSpeed);
        smoothRotation(leg6tip, -angles.angle18, "z", props.animationSpeed);
    });

    // changing emissive color of stripes on model so that it can be changed in visuals tab
    materials.leg1baseEmissive.emissive = rgbStringToColor(referenceColors.referenceColor1);
    materials.leg1middleEmissive.emissive = rgbStringToColor(referenceColors.referenceColor2);
    materials.leg1tipEmissive.emissive = rgbStringToColor(referenceColors.referenceColor3);

    materials.leg2baseEmissive.emissive = rgbStringToColor(referenceColors.referenceColor4);
    materials.leg2middleEmissive.emissive = rgbStringToColor(referenceColors.referenceColor5);
    materials.leg2tipEmissive.emissive = rgbStringToColor(referenceColors.referenceColor6);

    materials.leg3baseEmissive.emissive = rgbStringToColor(referenceColors.referenceColor7);
    materials.leg3middleEmissive.emissive = rgbStringToColor(referenceColors.referenceColor8);
    materials.leg3tipEmissive.emissive = rgbStringToColor(referenceColors.referenceColor9);

    materials.leg4baseEmissive.emissive = rgbStringToColor(referenceColors.referenceColor10);
    materials.leg4middleEmissive.emissive = rgbStringToColor(referenceColors.referenceColor11);
    materials.leg4tipEmissive.emissive = rgbStringToColor(referenceColors.referenceColor12);

    materials.leg5baseEmissive.emissive = rgbStringToColor(referenceColors.referenceColor13);
    materials.leg5middleEmissive.emissive = rgbStringToColor(referenceColors.referenceColor14);
    materials.leg5tipEmissive.emissive = rgbStringToColor(referenceColors.referenceColor15);

    materials.leg6baseEmissive.emissive = rgbStringToColor(referenceColors.referenceColor16);
    materials.leg6middleEmissive.emissive = rgbStringToColor(referenceColors.referenceColor17);
    materials.leg6tipEmissive.emissive = rgbStringToColor(referenceColors.referenceColor18);

    return (
        <group ref={group} {...props} dispose={null} position={[0, 1.1, 0]}>
            <group name="Scene">
                <mesh
                    name="base"
                    castShadow
                    receiveShadow
                    geometry={nodes.base.geometry}
                    material={new MeshBasicMaterial({ color: baseColor })}
                />
                <group ref={leg3base} name="leg3base" position={[-2.65, 0.18, 0]} rotation={[Math.PI / 2, 0, 0]}>
                    <group onClick={() => props.changeTarget(7)}>
                        <mesh
                            name="leg3base_1"
                            castShadow
                            receiveShadow
                            geometry={nodes.leg3base_1.geometry}
                            material={
                                isActive && whichActive === 7
                                    ? new MeshBasicMaterial({ color: activeColor })
                                    : new MeshBasicMaterial({ color: baseColor })
                            }
                        />
                        <mesh
                            name="leg3base_2"
                            castShadow
                            receiveShadow
                            geometry={nodes.leg3base_2.geometry}
                            material={materials.leg3baseEmissive}
                        />
                    </group>
                    <group ref={leg3middle} name="leg3middle" position={[1.72, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                        <group onClick={() => props.changeTarget(8)}>
                            <mesh
                                name="leg3middle_1"
                                castShadow
                                receiveShadow
                                geometry={nodes.leg3middle_1.geometry}
                                material={
                                    isActive && whichActive === 8
                                        ? new MeshBasicMaterial({ color: activeColor })
                                        : new MeshBasicMaterial({ color: baseColor })
                                }
                            />
                            <mesh
                                name="leg3middle_2"
                                castShadow
                                receiveShadow
                                geometry={nodes.leg3middle_2.geometry}
                                material={materials.leg3middleEmissive}
                            />
                        </group>
                        <group ref={leg3tip} name="leg3tip" position={[1.95, -0.11, 0]} scale={[0.13, 0.24, 0.24]}>
                            <group onClick={() => props.changeTarget(9)}>
                                <mesh
                                    name="leg3tip_1"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.leg3tip_1.geometry}
                                    material={
                                        isActive && whichActive === 9
                                            ? new MeshBasicMaterial({ color: activeColor })
                                            : new MeshBasicMaterial({ color: baseColor })
                                    }
                                />
                                <mesh
                                    name="leg3tip_2"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.leg3tip_2.geometry}
                                    material={materials.leg3tipEmissive}
                                />
                            </group>
                        </group>
                    </group>
                </group>
                <group ref={leg2base} name="leg2base" position={[2.02, 0.18, -2.87]} rotation={[Math.PI / 2, 0, 0]}>
                    <group onClick={() => props.changeTarget(4)}>
                        <mesh
                            name="leg2base_1"
                            castShadow
                            receiveShadow
                            geometry={nodes.leg2base_1.geometry}
                            material={
                                isActive && whichActive === 4
                                    ? new MeshBasicMaterial({ color: activeColor })
                                    : new MeshBasicMaterial({ color: baseColor })
                            }
                        />
                        <mesh
                            name="leg2base_2"
                            castShadow
                            receiveShadow
                            geometry={nodes.leg2base_2.geometry}
                            material={materials.leg2baseEmissive}
                        />
                    </group>
                    <group ref={leg2middle} name="leg2middle" position={[1.72, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                        <group onClick={() => props.changeTarget(5)}>
                            <mesh
                                name="leg2middle_1"
                                castShadow
                                receiveShadow
                                geometry={nodes.leg2middle_1.geometry}
                                material={
                                    isActive && whichActive === 5
                                        ? new MeshBasicMaterial({ color: activeColor })
                                        : new MeshBasicMaterial({ color: baseColor })
                                }
                            />
                            <mesh
                                name="leg2middle_2"
                                castShadow
                                receiveShadow
                                geometry={nodes.leg2middle_2.geometry}
                                material={materials.leg2middleEmissive}
                            />
                        </group>
                        <group ref={leg2tip} name="leg2tip" position={[1.95, -0.11, 0]} scale={[0.13, 0.24, 0.24]}>
                            <group onClick={() => props.changeTarget(6)}>
                                <mesh
                                    name="leg2tip_1"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.leg2tip_1.geometry}
                                    material={
                                        isActive && whichActive === 6
                                            ? new MeshBasicMaterial({ color: activeColor })
                                            : new MeshBasicMaterial({ color: baseColor })
                                    }
                                />
                                <mesh
                                    name="leg2tip_2"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.leg2tip_2.geometry}
                                    material={materials.leg2tipEmissive}
                                />
                            </group>
                        </group>
                    </group>
                </group>
                <group ref={leg1base} name="leg1base" position={[-2.02, 0.18, -2.88]} rotation={[Math.PI / 2, 0, 0]}>
                    <group onClick={() => props.changeTarget(1)}>
                        <mesh
                            name="leg1base_1"
                            castShadow
                            receiveShadow
                            geometry={nodes.leg1base_1.geometry}
                            material={
                                isActive && whichActive === 1
                                    ? new MeshBasicMaterial({ color: activeColor })
                                    : new MeshBasicMaterial({ color: baseColor })
                            }
                        />
                        <mesh
                            name="leg1base_2"
                            castShadow
                            receiveShadow
                            geometry={nodes.leg1base_2.geometry}
                            material={materials.leg1baseEmissive}
                        />
                    </group>
                    <group ref={leg1middle} name="leg1middle" position={[1.72, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                        <group onClick={() => props.changeTarget(2)}>
                            <mesh
                                name="leg1middle_1"
                                castShadow
                                receiveShadow
                                geometry={nodes.leg1middle_1.geometry}
                                material={
                                    isActive && whichActive === 2
                                        ? new MeshBasicMaterial({ color: activeColor })
                                        : new MeshBasicMaterial({ color: baseColor })
                                }
                            />
                            <mesh
                                name="leg1middle_2"
                                castShadow
                                receiveShadow
                                geometry={nodes.leg1middle_2.geometry}
                                material={materials.leg1middleEmissive}
                            />
                        </group>
                        <group ref={leg1tip} name="leg1tip" position={[1.95, -0.11, 0]} scale={[0.13, 0.24, 0.24]}>
                            <group onClick={() => props.changeTarget(3)}>
                                <mesh
                                    name="leg1tip_1"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.leg1tip_1.geometry}
                                    material={
                                        isActive && whichActive === 3
                                            ? new MeshBasicMaterial({ color: activeColor })
                                            : new MeshBasicMaterial({ color: baseColor })
                                    }
                                />
                                <mesh
                                    name="leg1tip_2"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.leg1tip_2.geometry}
                                    material={materials.leg1tipEmissive}
                                />
                            </group>
                        </group>
                    </group>
                </group>
                <group ref={leg5base} name="leg5base" position={[-2.02, 0.18, 2.88]} rotation={[Math.PI / 2, 0, 0]}>
                    <group onClick={() => props.changeTarget(13)}>
                        <mesh
                            name="leg5base_1"
                            castShadow
                            receiveShadow
                            geometry={nodes.leg5base_1.geometry}
                            material={
                                isActive && whichActive === 13
                                    ? new MeshBasicMaterial({ color: activeColor })
                                    : new MeshBasicMaterial({ color: baseColor })
                            }
                        />
                        <mesh
                            name="leg5base_2"
                            castShadow
                            receiveShadow
                            geometry={nodes.leg5base_2.geometry}
                            material={materials.leg5baseEmissive}
                        />
                    </group>
                    <group ref={leg5middle} name="leg5middle" position={[1.72, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                        <group onClick={() => props.changeTarget(14)}>
                            <mesh
                                name="leg5middle_1"
                                castShadow
                                receiveShadow
                                geometry={nodes.leg5middle_1.geometry}
                                material={
                                    isActive && whichActive === 14
                                        ? new MeshBasicMaterial({ color: activeColor })
                                        : new MeshBasicMaterial({ color: baseColor })
                                }
                            />
                            <mesh
                                name="leg5middle_2"
                                castShadow
                                receiveShadow
                                geometry={nodes.leg5middle_2.geometry}
                                material={materials.leg5middleEmissive}
                            />
                        </group>
                        <group ref={leg5tip} name="leg5tip" position={[1.95, -0.11, 0]} scale={[0.13, 0.24, 0.24]}>
                            <group onClick={() => props.changeTarget(15)}>
                                <mesh
                                    name="leg5tip_1"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.leg5tip_1.geometry}
                                    material={
                                        isActive && whichActive === 15
                                            ? new MeshBasicMaterial({ color: activeColor })
                                            : new MeshBasicMaterial({ color: baseColor })
                                    }
                                />
                                <mesh
                                    name="leg5tip_2"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.leg5tip_2.geometry}
                                    material={materials.leg5tipEmissive}
                                />
                            </group>
                        </group>
                    </group>
                </group>
                <group ref={leg6base} name="leg6base" position={[2.02, 0.18, 2.89]} rotation={[Math.PI / 2, 0, 0]}>
                    <group onClick={() => props.changeTarget(16)}>
                        <mesh
                            name="leg6base_1"
                            castShadow
                            receiveShadow
                            geometry={nodes.leg6base_1.geometry}
                            material={
                                isActive && whichActive === 16
                                    ? new MeshBasicMaterial({ color: activeColor })
                                    : new MeshBasicMaterial({ color: baseColor })
                            }
                        />
                        <mesh
                            name="leg6base_2"
                            castShadow
                            receiveShadow
                            geometry={nodes.leg6base_2.geometry}
                            material={materials.leg6baseEmissive}
                        />
                    </group>
                    <group ref={leg6middle} name="leg6middle" position={[1.72, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                        <group onClick={() => props.changeTarget(17)}>
                            <mesh
                                name="leg6middle_1"
                                castShadow
                                receiveShadow
                                geometry={nodes.leg6middle_1.geometry}
                                material={
                                    isActive && whichActive === 17
                                        ? new MeshBasicMaterial({ color: activeColor })
                                        : new MeshBasicMaterial({ color: baseColor })
                                }
                            />
                            <mesh
                                name="leg6middle_2"
                                castShadow
                                receiveShadow
                                geometry={nodes.leg6middle_2.geometry}
                                material={materials.leg6middleEmissive}
                            />
                        </group>
                        <group ref={leg6tip} name="leg6tip" position={[1.95, -0.11, 0]} scale={[0.13, 0.24, 0.24]}>
                            <group onClick={() => props.changeTarget(18)}>
                                <mesh
                                    name="leg6tip_1"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.leg6tip_1.geometry}
                                    material={
                                        isActive && whichActive === 18
                                            ? new MeshBasicMaterial({ color: activeColor })
                                            : new MeshBasicMaterial({ color: baseColor })
                                    }
                                />
                                <mesh
                                    name="leg6tip_2"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.leg6tip_2.geometry}
                                    material={materials.leg6tipEmissive}
                                />
                            </group>
                        </group>
                    </group>
                </group>
                <group ref={leg4base} name="leg4base" position={[2.66, 0.18, 0]} rotation={[Math.PI / 2, 0, 0]}>
                    <group onClick={() => props.changeTarget(10)}>
                        <mesh
                            name="leg4base_1"
                            castShadow
                            receiveShadow
                            geometry={nodes.leg4base_1.geometry}
                            material={
                                isActive && whichActive === 10
                                    ? new MeshBasicMaterial({ color: activeColor })
                                    : new MeshBasicMaterial({ color: baseColor })
                            }
                        />
                        <mesh
                            name="leg4base_2"
                            castShadow
                            receiveShadow
                            geometry={nodes.leg4base_2.geometry}
                            material={materials.leg4baseEmissive}
                        />
                    </group>
                    <group ref={leg4middle} name="leg4middle" position={[1.72, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                        <group onClick={() => props.changeTarget(11)}>
                            <mesh
                                name="leg4middle_1"
                                castShadow
                                receiveShadow
                                geometry={nodes.leg4middle_1.geometry}
                                material={
                                    isActive && whichActive === 11
                                        ? new MeshBasicMaterial({ color: activeColor })
                                        : new MeshBasicMaterial({ color: baseColor })
                                }
                            />
                            <mesh
                                name="leg4middle_2"
                                castShadow
                                receiveShadow
                                geometry={nodes.leg4middle_2.geometry}
                                material={materials.leg4middleEmissive}
                            />
                        </group>
                        <group ref={leg4tip} name="leg4tip" position={[1.95, -0.11, 0]} scale={[0.13, 0.24, 0.24]}>
                            <group onClick={() => props.changeTarget(12)}>
                                <mesh
                                    name="leg4tip_1"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.leg4tip_1.geometry}
                                    material={
                                        isActive && whichActive === 12
                                            ? new MeshBasicMaterial({ color: activeColor })
                                            : new MeshBasicMaterial({ color: baseColor })
                                    }
                                />
                                <mesh
                                    name="leg4tip_2"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.leg4tip_2.geometry}
                                    material={materials.leg4tipEmissive}
                                />
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    );
};

useGLTF.preload("/models/hexapod.glb");
