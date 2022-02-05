import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { rgbStringToColor } from "../utils/rgbStringObject";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { Vector3 } from "three";

type GLTFResult = GLTF & {
    nodes: {
        plane: THREE.Mesh;
    };
    materials: {
        plane: THREE.MeshStandardMaterial;
    };
};

interface planeProps {
    planeColor: string;
}

export const Plane = (props: JSX.IntrinsicElements["group"] & planeProps) => {
    const group = useRef();
    const { nodes, materials } = useGLTF("/models/plane.glb") as unknown as GLTFResult;

    materials.plane.emissive = rgbStringToColor(props.planeColor);

    return (
        <group ref={group} {...props} dispose={null} scale={new Vector3(5, 5, 5)}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.plane.geometry}
                material={materials.plane}
                position={[0, -0.1, 0]}
            />
        </group>
    );
};

useGLTF.preload("/models/plane.glb");
