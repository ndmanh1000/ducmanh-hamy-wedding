# Hướng dẫn chia sẻ website lên Zalo/Facebook với thumbnail

## ✅ Đã hoàn thành

Website đã được cấu hình để hiển thị ảnh `bin2.webp` (cô dâu chú rể cầm hộp nhẫn) làm thumbnail khi chia sẻ link trên Zalo hoặc Facebook.

### File đã tạo/sửa:

1. **`src/app/layout.js`** - Thêm Open Graph metadata
2. **`scripts/generate-og-image.mjs`** - Script tạo thumbnail tối ưu
3. **`public/assets/images/og-image.jpg`** - Thumbnail 1200×1500px (82KB)
4. **`package.json`** - Thêm script `npm run og`

## 🎯 Cách hoạt động

### Metadata trong HTML
Khi ai đó chia sẻ link website, Zalo/Facebook sẽ crawl và đọc các thẻ meta này:

```html
<meta property="og:image" content="https://your-domain.com/assets/images/og-image.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="1500">
<meta property="og:title" content="Đức Mạnh & Hà My - 20.09.2026 | Lễ Thành Hôn">
<meta property="og:description" content="Trân trọng kính mời...">
```

### Thumbnail đã tối ưu
- **Nguồn**: `bin2.webp` (5342×8009px WebP) 
- **Output**: `og-image.jpg` (1200×1500px JPEG)
- **Lý do**: Zalo/Facebook không đọc tốt WebP, và skip ảnh quá lớn
- **Tỷ lệ**: 4:5 dọc - khớp với layout thumbnail Zalo
- **Crop**: Gravity "north" - giữ khuôn mặt cô dâu chú rể

## 📋 Các bước tiếp theo

### 1. Deploy lên hosting (bắt buộc)

Zalo và Facebook **chỉ crawl HTTPS**. Bạn cần deploy site lên một trong các nền tảng:

#### Option A: Vercel (khuyến nghị - miễn phí)
```bash
# Cài Vercel CLI
npm i -g vercel

# Deploy
cd ducmanh-hamy-wedding
vercel

# Production deploy
vercel --prod
```

Sau khi deploy, bạn sẽ có URL kiểu: `https://ducmanh-hamy-wedding.vercel.app`

#### Option B: Netlify
```bash
npm i -g netlify-cli
cd ducmanh-hamy-wedding
npm run build
netlify deploy --prod
```

### 2. Cập nhật domain (nếu khác vercel.app)

Nếu deploy lên domain riêng (VD: `https://wedding-ducmanh-hamy.com`):

Tạo file `.env.local`:
```
NEXT_PUBLIC_SITE_URL=https://wedding-ducmanh-hamy.com
```

Sau đó build lại:
```bash
npm run build
vercel --prod
```

### 3. Test thumbnail

#### A. Facebook Sharing Debugger (quan trọng!)
1. Vào: https://developers.facebook.com/tools/debug/
2. Paste URL của site (sau khi deploy)
3. Click **"Fetch new information"**
4. Xem preview thumbnail → phải hiển thị ảnh cô dâu chú rể

**Lưu ý**: Facebook cache rất lâu. Mỗi lần sửa ảnh hoặc metadata, phải vào tool này click "Fetch new information" để làm mới.

#### B. Test trên Zalo
1. Mở Zalo (mobile hoặc desktop)
2. Gửi link cho bạn bè hoặc nhóm test
3. Zalo sẽ tự động hiển thị preview với thumbnail

### 4. Chia sẻ thực tế

Sau khi test OK, bạn có thể chia sẻ link lên:
- Zalo cá nhân / nhóm
- Facebook Timeline / Messenger
- Thiệp mời online

## 🔧 Nếu muốn đổi ảnh thumbnail

### Cách 1: Dùng ảnh khác trong thư mục
Nếu muốn dùng `bin3.webp` thay vì `bin2.webp`:

1. Sửa `scripts/generate-og-image.mjs` dòng 22:
```js
const SOURCE = path.join(projectRoot, "public/assets/images/bin3.webp");
```

2. Chạy lại:
```bash
npm run og
```

3. Build và deploy lại:
```bash
npm run build
vercel --prod
```

4. **Quan trọng**: Vào Facebook Debugger fetch lại

### Cách 2: Upload ảnh mới
1. Copy ảnh mới vào `public/assets/images/my-new-photo.jpg`
2. Sửa `src/app/layout.js` dòng 15:
```js
url: "/assets/images/my-new-photo.jpg",
```
3. Sửa dimensions (width/height) nếu khác 1200×1500
4. Build và deploy

## 🐛 Troubleshooting

### "Thumbnail không hiển thị trên Zalo/Facebook"

**Nguyên nhân & giải pháp:**

1. **Chưa deploy (đang test localhost)**
   - ❌ `http://localhost:3002` → Zalo/FB không crawl được
   - ✅ Phải deploy lên Vercel/Netlify (HTTPS)

2. **Facebook cache cũ**
   - Vào Facebook Debugger → "Fetch new information"

3. **File ảnh không tồn tại**
   - Kiểm tra: `public/assets/images/og-image.jpg` có tồn tại không?
   - Chạy: `npm run og` để sinh lại

4. **metadataBase sai**
   - Domain trong `layout.js` phải khớp với domain deploy
   - VD: Nếu deploy lên `abc.vercel.app`, set `.env.local`:
     ```
     NEXT_PUBLIC_SITE_URL=https://abc.vercel.app
     ```

5. **Ảnh quá lớn hoặc sai format**
   - Thumbnail hiện tại: 1200×1500px JPEG 82KB → OK
   - Nếu tự custom, giữ dưới 8MB và dùng JPEG/PNG, tránh WebP

### "Metadata không xuất hiện trong HTML"

Kiểm tra build:
```bash
npm run build
npm start
```

Mở http://localhost:3000, view source (Ctrl+U), tìm:
```html
<meta property="og:image" content="...">
```

Nếu không thấy → metadata chưa đúng, check lại `layout.js`

## 📝 Scripts có sẵn

```bash
npm run dev          # Dev server (http://localhost:3000)
npm run build        # Build production
npm start            # Chạy production build (sau khi build)
npm run lint         # Check ESLint
npm run og           # Sinh lại thumbnail từ bin2.webp
```

## 🎉 Kết quả mong đợi

Sau khi hoàn thành, khi chia sẻ link lên Zalo/Facebook, người nhận sẽ thấy:

- **Ảnh lớn**: Cô dâu chú rể (1200×1500px portrait)
- **Tiêu đề**: "Đức Mạnh & Hà My - 20.09.2026 | Lễ Thành Hôn"
- **Mô tả**: "Trân trọng kính mời Quý khách..."
- **Link**: URL website của bạn

Giống hệt như ảnh mẫu bạn gửi!

---

**Có câu hỏi?** Liên hệ qua Zalo/Facebook hoặc mở issue trên GitHub.
