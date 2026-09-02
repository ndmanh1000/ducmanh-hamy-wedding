/**
 * Resize ảnh wedding về kích thước phù hợp cho web.
 *
 * Vấn đề gốc: ảnh nguồn là 5342x8009 px. Mỗi ảnh khi browser decode
 * chiếm ~163 MB RAM (width * height * 4 byte RGBA), bất kể file .webp
 * chỉ nặng vài trăm KB. Gallery có 11 ảnh -> ~1.7 GB nếu decode hết,
 * khiến tab browser bị OOM crash và reload (người dùng thấy như bị
 * "out về trang chủ" vì state isOpened reset -> hiện lại phong bì).
 *
 * Giải pháp: xuất 2 bản
 *   - Bản full (max 1920px)  -> dùng cho lightbox / background lớn
 *   - Bản thumb (max 600px)  -> dùng cho grid + collage
 *
 * Ảnh gốc luôn được backup sang public/assets/images/originals/
 * nên script có thể chạy lại nhiều lần mà không giảm chất lượng dần.
 *
 * Chạy: node scripts/resize-gallery-images.mjs
 */
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, "..");
const imagesDir = path.join(projectRoot, "public/assets/images");
const backupDir = path.join(imagesDir, "originals");
const thumbsDir = path.join(imagesDir, "thumbs");

// Toàn bộ ảnh dùng trong gallery / hero / couple cards / timeline.
const IMAGES = [
  "bin1.webp",
  "bin2.webp",
  "bin3.webp",
  "bin4.webp",
  "bin5.webp",
  "bin6.webp",
  "bin7.webp",
  "bin9.webp",
  "bin10.webp",
  "bin11.webp",
  "myyy.webp",
];

const FULL_WIDTH = 1920; // đủ nét cho lightbox trên màn Full HD / retina mobile
const FULL_QUALITY = 85;
const THUMB_WIDTH = 600; // grid hiển thị tối đa ~280px, 600px là đủ cho retina
const THUMB_QUALITY = 78;

const mb = (bytes) => bytes / 1024 / 1024;
const decodedMb = (w, h) => (w * h * 4) / 1024 / 1024;

async function main() {
  for (const dir of [backupDir, thumbsDir]) {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`✓ Đã tạo thư mục: ${path.relative(projectRoot, dir)}`);
    }
  }

  console.log(`\nXử lý ${IMAGES.length} ảnh...\n`);

  let totalFullDecoded = 0;
  let totalThumbDecoded = 0;
  let totalOriginalDecoded = 0;

  for (const filename of IMAGES) {
    const fullPath = path.join(imagesDir, filename);
    const backupPath = path.join(backupDir, filename);
    const thumbPath = path.join(thumbsDir, filename);

    if (!fs.existsSync(fullPath) && !fs.existsSync(backupPath)) {
      console.log(`⚠️  Bỏ qua ${filename} (không tìm thấy)`);
      continue;
    }

    // Backup 1 lần duy nhất -> luôn resize từ bản gốc, không nén lại nhiều lần.
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(fullPath, backupPath);
      console.log(`📦 Backup: ${filename} -> originals/`);
    }

    const src = await sharp(backupPath).metadata();
    totalOriginalDecoded += decodedMb(src.width, src.height);

    // ---- Bản full cho lightbox ----
    await sharp(backupPath)
      .rotate()
      .resize(FULL_WIDTH, null, { fit: "inside", withoutEnlargement: true })
      .webp({ quality: FULL_QUALITY, effort: 6 })
      .toFile(fullPath + ".tmp");
    fs.renameSync(fullPath + ".tmp", fullPath);

    // ---- Bản thumb cho grid ----
    await sharp(backupPath)
      .rotate()
      .resize(THUMB_WIDTH, null, { fit: "inside", withoutEnlargement: true })
      .webp({ quality: THUMB_QUALITY, effort: 6 })
      .toFile(thumbPath);

    const full = await sharp(fullPath).metadata();
    const thumb = await sharp(thumbPath).metadata();
    totalFullDecoded += decodedMb(full.width, full.height);
    totalThumbDecoded += decodedMb(thumb.width, thumb.height);

    console.log(`✓ ${filename}`);
    console.log(
      `   gốc   ${src.width}x${src.height}`.padEnd(28) +
        `${mb(fs.statSync(backupPath).size).toFixed(2)} MB file` .padEnd(20) +
        `~${decodedMb(src.width, src.height).toFixed(1)} MB RAM`
    );
    console.log(
      `   full  ${full.width}x${full.height}`.padEnd(28) +
        `${mb(fs.statSync(fullPath).size).toFixed(2)} MB file`.padEnd(20) +
        `~${decodedMb(full.width, full.height).toFixed(1)} MB RAM`
    );
    console.log(
      `   thumb ${thumb.width}x${thumb.height}`.padEnd(28) +
        `${mb(fs.statSync(thumbPath).size).toFixed(2)} MB file`.padEnd(20) +
        `~${decodedMb(thumb.width, thumb.height).toFixed(1)} MB RAM`
    );
    console.log("");
  }

  console.log("─".repeat(70));
  console.log(`RAM nếu decode toàn bộ ảnh gốc : ~${totalOriginalDecoded.toFixed(0)} MB  ← nguyên nhân crash`);
  console.log(`RAM khi grid dùng thumbs       : ~${totalThumbDecoded.toFixed(0)} MB`);
  console.log(`RAM 1 ảnh full trong lightbox  : ~${(totalFullDecoded / IMAGES.length).toFixed(0)} MB`);
  console.log("\n✅ Xong. Ảnh gốc nằm trong public/assets/images/originals/ (đã thêm vào .gitignore).");
}

main().catch((err) => {
  console.error("❌ Lỗi:", err);
  process.exit(1);
});
