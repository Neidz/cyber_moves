// functions changing normal angles to radians

export const toRadian = (angle: number) => {
    return angle * (Math.PI / 180);
};

export const toRadianList = (angles: number[]) => {
    const convertedAngles: number[] = [];
    angles.forEach((number: number) => {
        convertedAngles.push(toRadian(number));
    });
    return convertedAngles;
};
