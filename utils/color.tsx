const generateRandomColor = () =>
  "#" +
  Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, "0");



// This code is intended as bonus functionality for the test application.
const isValidHexColor = (color: string) =>
  /^#([0-9A-Fa-f]{3}){1,2}$/.test(color);
const convertShortHexToLong = (color: string) => {
  return color
    .split("")
    .map(c => c + c)
    .join("");
};
/***
 * Converts a hex color to an RGB object
 * This is the fastest way to convert a hex color to RGB
 */
const hexToRgb = (color: string): { r: number; g: number; b: number } => {
  const rgb = parseInt(color, 16);
  return {
    r: (rgb >> 16) & 0xff,
    g: (rgb >> 8) & 0xff,
    b: (rgb >> 0) & 0xff,
  };
};

const getContrastColorFromRgb = (r: number, g: number, b: number) => {
  // https://en.wikipedia.org/wiki/Luma_(video)
  // Y=0.2126R+0.7152G+0.0722B
  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luma < 128 ? "#FFF" : "#000";
};

/**
 * Returns a contrasting color based on the input color
 */
const getContrastColor = (color: string) => {
  if (!isValidHexColor(color)) {
    throw new Error("Invalid color format");
  }

  let hexColor = color.substring(1);

  if (hexColor.length === 3) {
    hexColor = convertShortHexToLong(hexColor);
  }

  const { r, g, b } = hexToRgb(hexColor);
  return getContrastColorFromRgb(r, g, b);
};

export { generateRandomColor, getContrastColor };
