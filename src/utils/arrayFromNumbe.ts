export const arrayFromNumber = (number: number) => {
    const array = [];
    for (let i = 1; i < number + 1; i++) {
        array.push(i);
    }
    return array;
};
