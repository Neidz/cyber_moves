import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HexapodRobot } from "../3dComponents/hexapodRobot";
import { Plane } from "../3dComponents/plane";
import { OnScreenArrows } from "../components/onScreenArrows";
import { RenderMenu } from "../components/renderMenu";
import { useAmountOfAxis } from "../hooks/useAmountOfAxis";
import { useArrows } from "../hooks/useArrows";
import { useCleanUp } from "../hooks/useCleanUp";
import { editCommandRobotType } from "../store/features/commandsSlice";
import { RootState } from "../store/store";

export const HexapodRobotPage = () => {
    const { planeColor } = useSelector((state: RootState) => state.renderVisuals);
    const { renderVisuals, angles, keyControl } = useSelector((state: RootState) => state);
    const { showButtons, animationSpeed } = useSelector((state: RootState) => state.options);
    const changeTarget = useArrows();
    useAmountOfAxis(18);
    useCleanUp();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(editCommandRobotType("hexapod"));
        // eslint-disable-next-line
    }, []);

    return (
        <div className="mainContainer">
            <div className="mainRender">
                <Canvas camera={{ position: [5, 15, 15] }}>
                    <OrbitControls />
                    <Suspense fallback={null}>
                        <HexapodRobot
                            renderVisuals={renderVisuals}
                            angles={angles}
                            keyControl={keyControl}
                            changeTarget={changeTarget}
                            animationSpeed={animationSpeed}
                        />
                        <Plane planeColor={planeColor} />
                    </Suspense>
                </Canvas>
            </div>
            <RenderMenu />
            {showButtons && <OnScreenArrows />}
        </div>
    );
};
