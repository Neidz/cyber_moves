// validates if value is number

export const numberRegex = (value: any) => {
    return /^-?[0-9]\d*$/.test(value);
};
