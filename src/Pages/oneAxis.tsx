import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { SimpleAxis } from "../modelFiles/simpleAxis";
import { Lamp } from "../modelFiles/lamp";
import { Plane } from "../modelFiles/plane";
import { useArrows } from "../hooks/useArrows";
import { RenderMenu } from "../components/renderMenu";
import { useAmountOfAxis } from "../hooks/useAmountOfAxis";

export const OneAxis = () => {
    const angles = useSelector((state: RootState) => state.angles);
    const { referenceColors, baseColor, activeColor, planeColor } = useSelector((state: RootState) => state.renderVisuals);
    const { isActive, whichActive } = useSelector((state: RootState) => state.keyControl);
    const changeTarget = useArrows();
    useAmountOfAxis(1);

    return (
        <div className="mainContainer">
            <div className="mainRender">
                <Canvas>
                    <axesHelper position={[1, 1, 1]} />
                    <OrbitControls />
                    <Suspense fallback={null}>
                        <SimpleAxis
                            targetAngle={angles.angle1}
                            referenceColor={referenceColors.referenceColor1}
                            baseColor={isActive && whichActive === 1 ? activeColor : baseColor}
                            onClick={() => changeTarget(1)}
                        />
                        <Lamp position={[2, 0, 2]} lightColor={referenceColors.referenceColor1} baseColor={baseColor} />
                        <Plane position={[0, -3, 0]} planeColor={planeColor} />
                    </Suspense>
                </Canvas>
            </div>
            <RenderMenu />
        </div>
    );
};
