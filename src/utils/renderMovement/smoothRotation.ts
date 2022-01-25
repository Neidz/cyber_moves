import { toRadian } from "../toRadian";

// used with useFrame rotates object from current angle to targetAngle in
// time provided in animationSpeed prop
export const smoothRotation = (ref: any, targetAngle: number, axis: string = "y", animationSpeed: number = 1000) => {
    // checking for ref like a responsible person that I am, so forgive me that ref:any
    if (ref.current) {
        // animation runs in 60 fps so to make animation finish in time provided in animationSpeed (in milliseconds)
        // I'm calculating how many times object has to move per frame
        const movesPerFrame = (toRadian(targetAngle) - ref.current.rotation[axis]) / 60 / (animationSpeed / 1000);
        if (ref.current.rotation[axis] < toRadian(targetAngle)) {
            // those values are in radians so they are very small, sometimes floating point error can cause this function to oscilate
            // never reaching desired target angle, so I'm checking for that error here
            if (toRadian(targetAngle) - ref.current.rotation[axis] < movesPerFrame) {
                ref.current.rotation[axis] += toRadian(targetAngle) - ref.current.rotation[axis];
            } else {
                ref.current.rotation[axis] += movesPerFrame;
            }
        } else if (ref.current.rotation[axis] > toRadian(targetAngle)) {
            if (toRadian(targetAngle) - ref.current.rotation[axis] > movesPerFrame) {
                ref.current.rotation[axis] -= toRadian(targetAngle) - ref.current.rotation[axis];
            } else {
                // if target angle is lower than current angle then movesPerFrame will be negative so it should still be added
                ref.current.rotation[axis] += movesPerFrame;
            }
        }
    }
};
