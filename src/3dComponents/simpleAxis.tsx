import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { MeshBasicMaterial } from "three";
import { useFrame } from "@react-three/fiber";
import { smoothRotation } from "../utils/renderMovement/smoothRotation";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

interface simpleAxisProps {
    animationSpeed: number;
    baseColor: string;
    referenceColor: string;
    targetAngle: number;
}

type GLTFResult = GLTF & {
    nodes: {
        Cylinder002: THREE.Mesh;
        Cylinder002_1: THREE.Mesh;
        Cylinder001: THREE.Mesh;
        Cylinder001_1: THREE.Mesh;
    };
    materials: {
        referenceMaterial: THREE.MeshStandardMaterial;
        defaultMaterial: THREE.MeshStandardMaterial;
    };
};

export const SimpleAxis = (props: simpleAxisProps & JSX.IntrinsicElements["group"]) => {
    const group = useRef();
    const { nodes } = useGLTF("/models/simpleAxis.glb") as unknown as GLTFResult;

    useFrame(() => {
        if (group) {
            smoothRotation(group, props.targetAngle, "y", props.animationSpeed);
        }
    });

    return (
        <group ref={group} {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder001.geometry}
                material={new MeshBasicMaterial({ color: props.baseColor })}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder001_1.geometry}
                material={new MeshBasicMaterial({ color: props.referenceColor })}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder002.geometry}
                material={new MeshBasicMaterial({ color: props.referenceColor })}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder002_1.geometry}
                material={new MeshBasicMaterial({ color: props.baseColor })}
            />
        </group>
    );
};

useGLTF.preload("/models/simpleAxis.glb");
