/**
 * Sinh ảnh thumbnail (Open Graph) cho Zalo / Facebook từ ảnh gốc bin2.webp.
 *
 * Vì sao cần script này:
 *  - bin2.webp là ảnh gốc 5342x8009 (WebP). Zalo không đọc ổn định WebP,
 *    và cả Zalo lẫn Facebook đều bỏ qua ảnh quá lớn.
 *  - Nên ta xuất ra JPEG kích thước vừa phải, đúng chuẩn preview.
 *
 * Chạy: node scripts/generate-og-image.mjs
 *
 * Lưu ý: sharp được resolve từ node_modules (dependency đi kèm Next.js),
 * script này chỉ chạy thủ công lúc dev, không chạy khi build/runtime.
 */
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, "..");

const SOURCE = path.join(projectRoot, "public/assets/images/bin2.webp");
const OUT_DIR = path.join(projectRoot, "public/assets/images");

// 4:5 dọc - giống layout thumbnail lớn của Zalo trong ảnh mẫu.
// gravity "north" để giữ phần đầu / mặt cô dâu chú rể, không bị cắt mất.
const TARGETS = [
  {
    file: "og-image.jpg",
    width: 1200,
    height: 1500,
    gravity: "north",
  },
];

async function main() {
  const meta = await sharp(SOURCE).metadata();
  console.log(`Nguồn: ${path.basename(SOURCE)} (${meta.format} ${meta.width}x${meta.height})`);

  for (const target of TARGETS) {
    const outPath = path.join(OUT_DIR, target.file);

    await sharp(SOURCE)
      .rotate() // tôn trọng EXIF orientation nếu có
      .resize({
        width: target.width,
        height: target.height,
        fit: "cover",
        position: target.gravity,
      })
      .jpeg({ quality: 82, progressive: true, mozjpeg: true })
      .toFile(outPath);

    const out = await sharp(outPath).metadata();
    const sizeKb = fs.statSync(outPath).size / 1024;
    console.log(
      `-> ${target.file}: ${out.width}x${out.height}, ${sizeKb.toFixed(0)} KB`
    );
  }
}

main().catch((err) => {
  console.error("Sinh ảnh OG thất bại:", err);
  process.exit(1);
});
