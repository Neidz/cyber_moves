import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { useSelector } from "react-redux";
import { ControlPanel } from "../components/controlPanel";
import { useArrows } from "../hooks/useArrows";
import { Lamp } from "../modelFiles/lamp";
import { Plane } from "../modelFiles/plane";
import { SimpleAxis } from "../modelFiles/simpleAxis";
import { anglesState } from "../store/features/anglesSlice";
import { deviceColorsState, referenceColorsState } from "../store/features/renderVisualsSlice";
import { RootState } from "../store/store";
import { arrayFromNumber } from "../utils/arrayFromNumber";
import { calculateLayout } from "../utils/calculateLayout";

export const MultipleAxis = () => {
    // eslint-disable-next-line
    const [amountOfAxis, setAmountOfAxis] = useState<number>(10);
    // eslint-disable-next-line
    const [amountOfDevices, setAmountOfDevices] = useState<number>(5);

    const angles = useSelector((state: RootState) => state.angles);
    const { referenceColors, baseColor, activeColor, planeColor, deviceColors } = useSelector(
        (state: RootState) => state.renderVisuals
    );
    const { isActive, whichActive } = useSelector((state: RootState) => state.keyControl);
    const changeTarget = useArrows();

    return (
        <div className="multipleAxis">
            <div className="mainRender">
                <Canvas>
                    <axesHelper position={[1, 1, 1]} />
                    <OrbitControls />

                    <Suspense fallback={null}>
                        {arrayFromNumber(amountOfAxis).map((key: number) => {
                            return (
                                <SimpleAxis
                                    position={calculateLayout(amountOfAxis, key, "axis")}
                                    referenceColor={referenceColors[`referenceColor${key}` as keyof referenceColorsState]}
                                    baseColor={isActive && whichActive === key ? activeColor : baseColor}
                                    key={key}
                                    targetAngle={angles[`angle${key}` as keyof anglesState]}
                                    onClick={() => changeTarget(key)}
                                />
                            );
                        })}
                        {arrayFromNumber(amountOfDevices).map((key: number) => {
                            return (
                                <Lamp
                                    position={calculateLayout(amountOfDevices, key, "lamp", 2)}
                                    lightColor={deviceColors[`deviceColor${key}` as keyof deviceColorsState]}
                                    baseColor={baseColor}
                                    key={key}
                                />
                            );
                        })}

                        <Plane position={[0, -3, 0]} planeColor={planeColor} />
                    </Suspense>
                </Canvas>
            </div>
            <ControlPanel amountOfAxis={amountOfAxis} />
        </div>
    );
};
