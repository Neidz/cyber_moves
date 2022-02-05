// changes rgb or rgba object to rgb string

import { Color } from "three";

// {r: 120, g: 121, b: 122, a: 1} => returns "rgba(120,121,122,1)"
export const rgbObjectToString = (rgb: { r: number; g: number; b: number; a?: number }) => {
    if (rgb.a) {
        return `rgba(${rgb.r},${rgb.g},${rgb.b}, ${rgb.a})`;
    } else {
        return `rgb(${rgb.r},${rgb.g},${rgb.b})`;
    }
};

// changes rgb or rgba string to rgb object
// "rgba(120,121,122,1)" => returns {r: 120, g: 121, b: 122, a: 1}
export const rgbStringToObject = (rgb: string) => {
    const regexA = /a/;

    if (rgb.match(regexA)) {
        const colorsRegex = /rgba\((\d{1,3}),\s?(\d{1,3}),\s?(\d{1,3}),\s?(\d{1}\.?\d+?)\)/;
        const matchedColors = colorsRegex.exec(rgb);
        const r = matchedColors && matchedColors[1];
        const g = matchedColors && matchedColors[2];
        const b = matchedColors && matchedColors[3];
        const a = matchedColors && matchedColors[4];
        if (r !== undefined && r && g !== undefined && g && b !== undefined && b && a !== undefined && a) {
            return { r: parseInt(r), g: parseInt(g), b: parseInt(b), a: parseInt(a) };
        }
    } else {
        const colorsRegex = /rgb\((\d{1,3}),\s?(\d{1,3}),\s?(\d{1,3})\)/;
        const matchedColors = colorsRegex.exec(rgb);
        const r = matchedColors && matchedColors[1];
        const g = matchedColors && matchedColors[2];
        const b = matchedColors && matchedColors[3];
        if (r !== undefined && r && g !== undefined && g && b !== undefined && b) {
            return { r: parseInt(r), g: parseInt(g), b: parseInt(b) };
        }
    }
    console.log("wrong value for rgb function");
    return null;
};

// changes rgb or rgba string to rgb object in fractions, a is cut out to avoit mess in blender models
// "rgba(120,121,122,1)" => returns {r: 120/255, g: 121/255, b: 122/255}
export const rgbStringToObjectFraction = (rgb: string) => {
    const colorsRegex = /rgb\((\d{1,3}),\s?(\d{1,3}),\s?(\d{1,3})\)/;
    const matchedColors = colorsRegex.exec(rgb);
    const r = matchedColors && matchedColors[1];
    const g = matchedColors && matchedColors[2];
    const b = matchedColors && matchedColors[3];
    if (r !== undefined && r && g !== undefined && g && b !== undefined && b) {
        return { r: parseInt(r) / 255, g: parseInt(g) / 255, b: parseInt(b) / 255 };
    }

    console.log("wrong value for rgb function");
    return null;
};

// changes rgb or rgba string to Color for three.js
export const rgbStringToColor = (rgb: string) => {
    const regexA = /a/;

    if (rgb.match(regexA)) {
        const colorsRegex = /rgba\((\d{1,3}),\s?(\d{1,3}),\s?(\d{1,3}),\s?(\d{1}\.?\d+?)\)/;
        const matchedColors = colorsRegex.exec(rgb);
        const r = matchedColors && matchedColors[1];
        const g = matchedColors && matchedColors[2];
        const b = matchedColors && matchedColors[3];
        const a = matchedColors && matchedColors[4];
        if (r !== undefined && r && g !== undefined && g && b !== undefined && b && a !== undefined && a) {
            return new Color(parseInt(r) / 255, parseInt(g) / 255, parseInt(b) / 255);
        }
    } else {
        const colorsRegex = /rgb\((\d{1,3}),\s?(\d{1,3}),\s?(\d{1,3})\)/;
        const matchedColors = colorsRegex.exec(rgb);
        const r = matchedColors && matchedColors[1];
        const g = matchedColors && matchedColors[2];
        const b = matchedColors && matchedColors[3];
        if (r !== undefined && r && g !== undefined && g && b !== undefined && b) {
            return new Color(parseInt(r) / 255, parseInt(g) / 255, parseInt(b) / 255);
        }
    }
    console.log("wrong value for rgb function");
    return new Color(1, 1, 1);
};
