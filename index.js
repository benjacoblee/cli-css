const rgbToHex = require("./rgbToHex");
const hexToRgb = require("./hexToRgb");
const rgbToHsl = require("./rgbToHsl");
const hexToHsl = require("./hexToHsl");

if (process.argv[2] === "hex") {
  console.log(hexToRgb(process.argv[3]));
  console.log(hexToHsl(process.argv[3]));
} else if (process.argv[2] === "rgb") {
  let r = parseInt(process.argv[3]);
  let g = parseInt(process.argv[4]);
  let b = parseInt(process.argv[5]);
  console.log(rgbToHex(r, g, b));
  console.log(rgbToHsl(r, g, b));
} else if (process.argv[2] === "color") {
  let r = parseInt(process.argv[3]);
  let g = parseInt(process.argv[4]);
  let b = parseInt(process.argv[5]);
  let myOutput = process.argv[6];
  console.log(`\x1b[38;2;${r};${g};${b}m%s\x1b[0m`, myOutput);
  console.log("asd");
}
