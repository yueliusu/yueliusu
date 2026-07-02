import sharp from "sharp";
import fs from "fs";

const src = "C:/Users/123/Desktop/avatar.jpg";

// 备份原图到仓库
fs.copyFileSync(src, "src/assets/avatar-source.png");

// 940x940 正方形 → 直接 cover 缩放到每个目标尺寸（无 letterbox 边）
const variants = [
  ["src/assets/avatar-mark.png", 144],   // 页面左上角贴纸头像
  ["public/avatar.png", 480],            // og:image 社交分享卡
  ["public/apple-touch-icon.png", 180], // iOS 主屏图标
  ["public/favicon-96x96.png", 96],
  ["public/favicon-32x32.png", 32],
  ["public/favicon-16x16.png", 16],
];

console.log("940x940 正方形 → cover 缩放");
for (const [out, size] of variants) {
  await sharp(src).resize(size, size, { fit: "cover", position: "centre" }).png().toFile(out);
  console.log(`  ${out}: ${size}x${size}, ${fs.statSync(out).size}B`);
}

// favicon.ico 用 32px PNG 包装
const png32 = fs.readFileSync("public/favicon-32x32.png");
const header = Buffer.from([0,0,1,0,1,0]);
const dir = Buffer.alloc(16);
dir.writeUInt8(32,0); dir.writeUInt8(32,1); dir.writeUInt8(0,2); dir.writeUInt8(0,3);
dir.writeUInt16LE(1,4); dir.writeUInt16LE(32,6);
dir.writeUInt32LE(png32.length,8); dir.writeUInt32LE(22,12);
fs.writeFileSync("public/favicon.ico", Buffer.concat([header, dir, png32]));
console.log("  favicon.ico:", fs.statSync("public/favicon.ico").size, "B");
