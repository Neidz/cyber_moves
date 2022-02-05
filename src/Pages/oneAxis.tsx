import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { SimpleAxis } from "../3dComponents/simpleAxis";
import { Plane } from "../3dComponents/plane";
import { useArrows } from "../hooks/useArrows";
import { RenderMenu } from "../components/renderMenu";
import { useAmountOfAxis } from "../hooks/useAmountOfAxis";
import { useCleanUp } from "../hooks/useCleanUp";
import { OnScreenArrows } from "../components/onScreenArrows";

export const OneAxis = () => {
    const angles = useSelector((state: RootState) => state.angles);
    const { referenceColors, baseColor, activeColor, planeColor } = useSelector((state: RootState) => state.renderVisuals);
    const { isActive, whichActive } = useSelector((state: RootState) => state.keyControl);
    const { animationSpeed } = useSelector((state: RootState) => state.options);
    const { showButtons } = useSelector((state: RootState) => state.options);
    const changeTarget = useArrows();
    useAmountOfAxis(1);
    useCleanUp();

    return (
        <div className="mainContainer">
            <div className="mainRender">
                <Canvas camera={{ position: [0, 10, 10] }}>
                    <OrbitControls />
                    <Suspense fallback={null}>
                        <SimpleAxis
                            targetAngle={angles.angle1}
                            referenceColor={referenceColors.referenceColor1}
                            baseColor={isActive && whichActive === 1 ? activeColor : baseColor}
                            onClick={() => changeTarget(1)}
                            animationSpeed={animationSpeed}
                        />
                        <Plane position={[0, -3, 0]} planeColor={planeColor} />
                    </Suspense>
                </Canvas>
            </div>
            <RenderMenu />
            {showButtons && <OnScreenArrows />}
        </div>
    );
};
