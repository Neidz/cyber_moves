// functions changing radians to normal angles

export const toAngle = (angle: number) => {
    return angle / (Math.PI / 180);
};

export const toAnglesList = (angles: number[]) => {
    const convertedAngles: number[] = [];
    angles.forEach((number: number) => {
        convertedAngles.push(toAngle(number));
    });
    return convertedAngles;
};
