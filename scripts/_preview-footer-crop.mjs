// Temporary: render footer crop (aspect 4/3, background-size: cover)
// at several background-position-y values to see what is actually visible.
import sharp from "sharp";
import fs from "node:fs";

const SRC = "public/assets/images/bin6.webp";
const OUT = "scripts/_preview";
fs.mkdirSync(OUT, { recursive: true });

const meta = await sharp(SRC).metadata();
const cropW = meta.width;
const cropH = Math.round((meta.width * 3) / 4); // container aspect 4/3
const maxTop = meta.height - cropH;

console.log(`source ${meta.width}x${meta.height} | crop ${cropW}x${cropH} | maxTop ${maxTop}`);

for (const p of [0, 20, 30, 50, 70, 100]) {
  const top = Math.round((p / 100) * maxTop);
  const out = `${OUT}/pos-${String(p).padStart(3, "0")}.jpg`;
  await sharp(SRC)
    .extract({ left: 0, top, width: cropW, height: cropH })
    .resize(420)
    .jpeg({ quality: 78 })
    .toFile(out);
  console.log(`pos ${p}% -> top=${top}px -> ${out}`);
}
