import { localStorageItems } from "../hooks/useLocalStorage";

// updates element in localStorage
export const updateStorage = (name: localStorageItems, value: any) => {
    if (typeof value === "string") {
        localStorage.setItem(name, value);
    } else {
        const stringValue = JSON.stringify(value);
        localStorage.setItem(name, stringValue);
    }
};
