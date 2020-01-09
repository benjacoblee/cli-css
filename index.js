const rgbToHex = require("./rgbToHex");
const hexToRgb = require("./hexToRgb");
const rgbToHsl = require("./rgbToHsl");
const hexToHsl = require("./hexToHsl");
const harmonize = require("./harmonize");
const r = parseInt(process.argv[3]);
const g = parseInt(process.argv[4]);
const b = parseInt(process.argv[5]);

if (process.argv[2] === "hex") {
  for (let i = 3; i < process.argv.length; i++) {
    console.log("Converted color: ", hexToRgb(process.argv[i]));
  }
} else if (process.argv[2] === "rgb") {
  console.log("Hex: ",rgbToHex(r, g, b));
  console.log("HSL: ",rgbToHsl(r, g, b));
} else if (process.argv[2] === "color") {
  let myOutput = process.argv[6];
  console.log(`\x1b[38;2;${r};${g};${b}m%s\x1b[0m`, myOutput);
} else if (process.argv[2] === "harmony") {
  const complement = harmonize.harmonize(process.argv[3], 180, 180, 1);
  const split = harmonize.harmonize(process.argv[3], 150, 210, 60);
  const triad = harmonize.harmonize(process.argv[3], 120, 240, 120);
  const tetrad = harmonize.harmonize(process.argv[3], 90, 270, 90);
  const analogous = harmonize.harmonize(process.argv[3], 30, 90, 30);
  console.log(
    `Entered HSL was ${complement[0]}, complement color is ${complement[1]}`
  );
  console.log(`Entered HSL was ${split[0]}, split color is ${split[1]}`);
  console.log(`Entered HSL was ${triad[0]}, triad color is ${triad[1]}`);
  console.log(`Entered HSL is ${tetrad[0]}, tetrad color is ${tetrad[1]}`);
  console.log(
    `Entered HSL is ${analogous[0]}, analogous color is ${analogous[1]}`
  );
}
