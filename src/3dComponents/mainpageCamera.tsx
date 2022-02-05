import { PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { modelRef } from "../types";
import { detectDeviceSize } from "../utils/detectDeviceSize";

export const MainpageCamera = () => {
    const cameraRef: React.MutableRefObject<undefined> | modelRef = useRef();
    const [direction, setDirection] = useState<"right" | "left">("right");
    const startingPositionX = -33;
    const startingPositionY = detectDeviceSize() === "small" ? 70 : 50;
    const startingRotationY = 0;
    const startingRotationX = detectDeviceSize() === "small" ? -0.2 : -0.3;
    const rotationSpeed = detectDeviceSize() === "small" ? 0.001 : 0.0005;
    const positionSpeed = 0.03;
    const maxPositionChange = detectDeviceSize() === "small" ? 10 : 15;

    useFrame(() => {
        if (cameraRef !== undefined && cameraRef.current) {
            if (direction === "right") {
                cameraRef.current.rotation.y += rotationSpeed;
                cameraRef.current.position.x += positionSpeed;
                if (cameraRef.current.position.x > startingPositionX + maxPositionChange) {
                    setDirection("left");
                }
            } else {
                cameraRef.current.rotation.y -= rotationSpeed;
                cameraRef.current.position.x -= positionSpeed;
                if (cameraRef.current.position.x < startingPositionX - maxPositionChange) {
                    setDirection("right");
                }
            }
        }
    });
    return (
        <PerspectiveCamera
            makeDefault
            position={[startingPositionX, 20, startingPositionY]}
            rotation={[startingRotationX, startingRotationY, 0]}
            ref={cameraRef}
        />
    );
};
