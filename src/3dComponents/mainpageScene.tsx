import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

type GLTFResult = GLTF & {
    nodes: {
        Plane: THREE.Mesh;
        cables: THREE.Mesh;
        Plane001: THREE.Mesh;
        Plane002: THREE.Mesh;
        textWireframe: THREE.Mesh;
        base_1: THREE.Mesh;
        base_2: THREE.Mesh;
        firstArm_1: THREE.Mesh;
        firstArm_2: THREE.Mesh;
        secondArm_1: THREE.Mesh;
        secondArm_2: THREE.Mesh;
        thirdArm_1: THREE.Mesh;
        thirdArm_2: THREE.Mesh;
        base2_1: THREE.Mesh;
        base2_2: THREE.Mesh;
        firstArm2_1: THREE.Mesh;
        firstArm2_2: THREE.Mesh;
        secondArm2_1: THREE.Mesh;
        secondArm2_2: THREE.Mesh;
        thirdArm2_1: THREE.Mesh;
        thirdArm2_2: THREE.Mesh;
        Cylinder: THREE.Mesh;
        Cylinder001: THREE.Mesh;
        Cylinder002: THREE.Mesh;
        Cylinder003: THREE.Mesh;
        Cylinder004: THREE.Mesh;
        Cylinder005: THREE.Mesh;
        Cylinder006: THREE.Mesh;
        Cylinder007: THREE.Mesh;
        Cylinder008: THREE.Mesh;
        Cylinder009: THREE.Mesh;
    };
    materials: {
        Material: THREE.MeshStandardMaterial;
        cables: THREE.MeshPhysicalMaterial;
        ["Material.002"]: THREE.MeshStandardMaterial;
        baseMaterial: THREE.MeshPhysicalMaterial;
        baseEmissive: THREE.MeshStandardMaterial;
        ["cable plugs"]: THREE.MeshPhysicalMaterial;
    };
};

export const MainpageScene = (props: JSX.IntrinsicElements["group"]) => {
    const group = useRef<THREE.Group>();
    const { nodes, materials, animations } = useGLTF("/models/mainPageAnimation.glb") as unknown as GLTFResult;
    const { actions } = useAnimations(animations, group) as any;

    // starts all animations baked into models
    useEffect(() => {
        Object.keys(actions).forEach((key) => {
            actions[key].play();
        });
    });

    return (
        <group ref={group} {...props} dispose={null}>
            <mesh castShadow receiveShadow geometry={nodes.Plane.geometry} material={nodes.Plane.material} />
            <mesh castShadow receiveShadow geometry={nodes.cables.geometry} material={materials.cables} />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane001.geometry}
                material={nodes.Plane001.material}
                position={[0, 0, -539.77]}
                rotation={[Math.PI / 2, 0, -Math.PI / 4]}
                scale={[2.29, 2.29, 2.29]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane002.geometry}
                material={nodes.Plane002.material}
                position={[0, 0, -539.77]}
                rotation={[Math.PI / 2, 0, Math.PI / 4]}
                scale={[1.66, 1.66, 1.66]}
            />
            <mesh castShadow receiveShadow geometry={nodes.textWireframe.geometry} material={materials["Material.002"]} />
            <group name="base" position={[-52.31, 0, -40.63]}>
                <mesh castShadow receiveShadow geometry={nodes.base_1.geometry} material={nodes.base_1.material} />
                <mesh castShadow receiveShadow geometry={nodes.base_2.geometry} material={nodes.base_2.material} />
                <group name="firstArm" position={[0, 3.05, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.firstArm_1.geometry}
                        material={nodes.firstArm_1.material}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.firstArm_2.geometry}
                        material={nodes.firstArm_2.material}
                    />
                    <group name="secondArm" position={[0, 10.35, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.secondArm_1.geometry}
                            material={nodes.secondArm_1.material}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.secondArm_2.geometry}
                            material={nodes.secondArm_2.material}
                        />
                        <group name="thirdArm" position={[1.29, 10.35, 0]}>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.thirdArm_1.geometry}
                                material={nodes.thirdArm_1.material}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.thirdArm_2.geometry}
                                material={nodes.thirdArm_2.material}
                            />
                        </group>
                    </group>
                </group>
            </group>
            <group name="base2" position={[-13.98, 0.9, -40.63]}>
                <mesh castShadow receiveShadow geometry={nodes.base2_1.geometry} material={nodes.base2_1.material} />
                <mesh castShadow receiveShadow geometry={nodes.base2_2.geometry} material={nodes.base2_2.material} />
                <group name="firstArm2" position={[0.1, 2.15, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.firstArm2_1.geometry}
                        material={nodes.firstArm2_1.material}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.firstArm2_2.geometry}
                        material={nodes.firstArm2_2.material}
                    />
                    <group name="secondArm2" position={[-0.2, 10.35, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.secondArm2_1.geometry}
                            material={nodes.secondArm2_1.material}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.secondArm2_2.geometry}
                            material={nodes.secondArm2_2.material}
                        />
                        <group name="thirdArm2" position={[0.2, 10.35, 0]}>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.thirdArm2_1.geometry}
                                material={nodes.thirdArm2_1.material}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.thirdArm2_2.geometry}
                                material={nodes.thirdArm2_2.material}
                            />
                        </group>
                    </group>
                </group>
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder.geometry}
                material={nodes.Cylinder.material}
                position={[-68, 2.55, -0.96]}
                rotation={[0, 0, 2.05]}
                scale={[0.1, 0.1, 0.1]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder001.geometry}
                material={nodes.Cylinder001.material}
                position={[-58.34, 1.69, -0.96]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[0.11, 0.11, 0.11]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder002.geometry}
                material={nodes.Cylinder002.material}
                position={[-52.18, 2.49, -0.96]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.11, 0.11, 0.11]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder003.geometry}
                material={nodes.Cylinder003.material}
                position={[-45.34, 3.92, -0.96]}
                rotation={[0, 0, Math.PI]}
                scale={[0.1, 0.1, 0.1]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder004.geometry}
                material={nodes.Cylinder004.material}
                position={[-38.39, 2.47, -0.96]}
                rotation={[0, 0, 2.14]}
                scale={[0.1, 0.1, 0.1]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder005.geometry}
                material={nodes.Cylinder005.material}
                position={[-30.62, 2.58, -0.96]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.1, 0.1, 0.1]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder006.geometry}
                material={nodes.Cylinder006.material}
                position={[-22.81, 2, -0.96]}
                rotation={[0, 0, 2.22]}
                scale={[0.1, 0.1, 0.1]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder007.geometry}
                material={nodes.Cylinder007.material}
                position={[-12.19, 1.67, -0.96]}
                rotation={[0, 0, 2]}
                scale={[0.11, 0.11, 0.11]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder008.geometry}
                material={nodes.Cylinder008.material}
                position={[-4.95, 3.91, -0.96]}
                rotation={[0, 0, Math.PI]}
                scale={[0.1, 0.1, 0.1]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder009.geometry}
                material={nodes.Cylinder009.material}
                position={[-1.33, 4.59, -0.96]}
                rotation={[0, 0, 2.48]}
                scale={[0.11, 0.11, 0.11]}
            />
        </group>
    );
};

useGLTF.preload("/models/mainPageAnimation.glb");
