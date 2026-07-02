import sharp from "sharp";
import fs from "fs";

const src = "C:/Users/123/AppData/Local/Temp/045c67856dbb435da8af3a76e6b9a611.png";

// 备份原图到仓库（也方便以后再生成不同尺寸）
fs.copyFileSync(src, "src/assets/avatar-source.png");

// 策略: 把 828x428 整张图做 cover 缩放进正方形，再智能裁剪掉低密度边。
// 已知: 左右两端内容密(seg0/seg4)，中间稀疏；上下两端密(row0/row2)，中间稀疏。
// 这种分布(像横幅/带字图)，直接 cover 会切掉左右。
// 改用 "contain" letterbox 适配进正方形纸色画布 —— 不丢任何内容，代价是上下有纸色边。
// 对贴纸头像(44x44 显示)而言，让全图可见比"切掉一半"更合理。

const PAPER = { r: 248, g: 244, b: 236, alpha: 1 };
const variants = [
  ["src/assets/avatar-mark.png", 144],   // 页面贴纸头像
  ["public/avatar.png", 480],             // 站大图
  ["public/apple-touch-icon.png", 180],  // iOS
  ["public/favicon-96x96.png", 96],
  ["public/favicon-32x32.png", 32],
  ["public/favicon-16x16.png", 16],
];

console.log("源图 828x428 → letterbox 进正方形（纸色底，contain 策略，保留全部内容）");
for (const [out, size] of variants) {
  await sharp(src)
    .resize(size, size, {
      fit: "contain",
      background: PAPER,
    })
    .flatten({ background: PAPER })
    .png()
    .toFile(out);
  console.log(`  ${out}: ${size}x${size}, ${fs.statSync(out).size}B`);
}

// 重建 favicon.ico (用 32px)
const png32 = fs.readFileSync("public/favicon-32x32.png");
const header = Buffer.from([0,0,1,0,1,0]);
const dir = Buffer.alloc(16);
dir.writeUInt8(32,0); dir.writeUInt8(32,1); dir.writeUInt8(0,2); dir.writeUInt8(0,3);
dir.writeUInt16LE(1,4); dir.writeUInt16LE(32,6);
dir.writeUInt32LE(png32.length,8); dir.writeUInt32LE(22,12);
fs.writeFileSync("public/favicon.ico", Buffer.concat([header, dir, png32]));
console.log("  favicon.ico:", fs.statSync("public/favicon.ico").size, "B (wrapped 32px)");
console.log("done.");
