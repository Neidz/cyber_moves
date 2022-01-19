// validates if value is number

export const numberRegex = (value: any) => {
    return /^-?[0-9]\d*$/.test(value);
};

export const positiveNumberRegex = (value: any) => {
    return /^[1-9]\d*$/.test(value);
};
