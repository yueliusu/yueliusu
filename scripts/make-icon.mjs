import sharp from "sharp";
import fs from "fs";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <path d="M50 5 C 47 12, 53 16, 50 22" fill="none" stroke="#26221c" stroke-width="5" stroke-linecap="round"/>
  <ellipse cx="50" cy="24" rx="9" ry="6.5" fill="#d75a48"/>
  <rect x="44" y="27" width="12" height="4" rx="2" fill="#26221c"/>
  <g fill="none" stroke="#26221c" stroke-width="4.6" stroke-linecap="round">
    <path d="M36 32 Q 35 60 34 84"/>
    <path d="M42 32 Q 41 62 40 87"/>
    <path d="M46 32 Q 46 64 46 88"/>
    <path d="M50 32 Q 50 66 50 90"/>
    <path d="M54 32 Q 54 64 54 88"/>
    <path d="M58 32 Q 59 62 60 87"/>
    <path d="M64 32 Q 65 60 66 84"/>
  </g>
</svg>`;

fs.writeFileSync("public/icon.svg", svg);
const sizes = [16, 32, 96, 180];
for (const s of sizes) await sharp(Buffer.from(svg)).resize(s, s, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(`public/favicon-${s}x${s}.png`);

await sharp(Buffer.from(svg)).resize(180, 180, { fit: "cover", background: { r: 248, g: 244, b: 236, alpha: 1 } }).flatten({ background: { r: 248, g: 244, b: 236, alpha: 1 } }).png().toFile("public/apple-touch-icon.png");

const png32 = fs.readFileSync("public/favicon-32x32.png");
const header = Buffer.from([0, 0, 1, 0, 1, 0]);
const dir = Buffer.alloc(16);
dir.writeUInt8(32, 0); dir.writeUInt8(32, 1); dir.writeUInt8(0, 2); dir.writeUInt8(0, 3);
dir.writeUInt16LE(1, 4); dir.writeUInt16LE(32, 6);
dir.writeUInt32LE(png32.length, 8); dir.writeUInt32LE(22, 12);
fs.writeFileSync("public/favicon.ico", Buffer.concat([header, dir, png32]));

console.log("OK");
console.log("svg:", fs.statSync("public/icon.svg").size + "B");
console.log("ico:", fs.statSync("public/favicon.ico").size + "B");
for (const s of sizes) console.log("favicon-"+s+"x"+s+".png:", fs.statSync("public/favicon-"+s+"x"+s+".png").size+"B");
console.log("apple-touch-icon.png:", fs.statSync("public/apple-touch-icon.png").size + "B");
