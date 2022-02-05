export interface colorChangeEvent {
    rgb: { r: number; g: number; b: number; a: number };
}

export interface modelRef {
    current: {
        rotation: {
            x: number;
            y: number;
            z: number;
        };
        scale: {
            x: number;
            y: number;
            z: number;
        };
        position: {
            x: number;
            y: number;
            z: number;
        };
    };
}
