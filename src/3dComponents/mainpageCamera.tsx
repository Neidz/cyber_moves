import { PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { modelRef } from "../types";

export const MainpageCamera = () => {
    const cameraRef: React.MutableRefObject<undefined> | modelRef = useRef();
    const startingPositionX = -33;
    const startingRotationY = 0;
    const rotationSpeed = 0.0005;
    const positionSpeed = 0.03;
    const maxPositionChange = 15;
    let direction = "right";

    useFrame(() => {
        if (cameraRef !== undefined && cameraRef.current) {
            if (direction === "right") {
                cameraRef.current.rotation.y += rotationSpeed;
                cameraRef.current.position.x += positionSpeed;
                if (cameraRef.current.position.x > startingPositionX + maxPositionChange) {
                    direction = "left";
                }
            } else {
                cameraRef.current.rotation.y -= rotationSpeed;
                cameraRef.current.position.x -= positionSpeed;
                if (cameraRef.current.position.x < startingPositionX - maxPositionChange) {
                    direction = "right";
                }
            }
        }
    });
    return (
        <PerspectiveCamera
            makeDefault
            position={[startingPositionX, 20, 50]}
            rotation={[-0.3, startingRotationY, 0]}
            ref={cameraRef}
        />
    );
};
