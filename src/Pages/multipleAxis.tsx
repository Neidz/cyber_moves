import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useSelector } from "react-redux";
import { OnScreenArrows } from "../components/onScreenArrows";
import { RenderMenu } from "../components/renderMenu";
import { useAmountOfAxis } from "../hooks/useAmountOfAxis";
import { useArrows } from "../hooks/useArrows";
import { useCleanUp } from "../hooks/useCleanUp";
import { Plane } from "../3dComponents/plane";
import { SimpleAxis } from "../3dComponents/simpleAxis";
import { anglesState } from "../store/features/anglesSlice";
import { referenceColorsState } from "../store/features/renderVisualsSlice";
import { RootState } from "../store/store";
import { arrayFromNumber } from "../utils/arrayFromNumber";
import { calculateLayout } from "../utils/calculateLayout";

export const MultipleAxis = () => {
    const angles = useSelector((state: RootState) => state.angles);
    const { referenceColors, baseColor, activeColor, planeColor } = useSelector((state: RootState) => state.renderVisuals);
    const { isActive, whichActive } = useSelector((state: RootState) => state.keyControl);
    const amountOfAxis = useSelector((state: RootState) => state.renderMenu.amountOfAxis);
    const { animationSpeed, showButtons } = useSelector((state: RootState) => state.options);
    const changeTarget = useArrows();
    useAmountOfAxis(9);
    useCleanUp();

    return (
        <div className="mainContainer">
            <div className="mainRender">
                <Canvas camera={{ position: [0, 10, 10] }}>
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
                                    animationSpeed={animationSpeed}
                                />
                            );
                        })}

                        <Plane position={[0, -3, 0]} planeColor={planeColor} />
                    </Suspense>
                </Canvas>
            </div>
            <RenderMenu />
            {showButtons && <OnScreenArrows />}
        </div>
    );
};
